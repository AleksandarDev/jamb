import React from "react";
import styles from "./Board.module.scss";
import cx from "clsx";

const ScoreCell = props => (
  <td>
    <div
      onClick={e =>
        !props.value && props.hintValue != null && props.onSelect(e)
      }
      className={cx(
        styles.score,
        styles.scoreLarge,
        props.value == null && props.hintValue <= 0 && styles.hintZero,
        props.value == null && props.hintValue > 0 && styles.hint,
        props.selected && styles.selected,
        props.disabled && styles.scoreDisabled
      )}
    >
      {props.value == null ? props.hintValue : props.value}
    </div>
  </td>
);

const ScoreRow = props => {
  const {
    className,
    index,
    values,
    disabled,
    hintValues,
    smallLabel,
    label,
    boardState,
    summarize,
    onCellClick
  } = props;

  const isValidHint = !disabled && [
    boardState.throwIndex > 0 &&
      boardState.announcementIndex == null &&
      boardState.downIndex >= index,
    boardState.throwIndex > 0 &&
      boardState.announcementIndex == null &&
      boardState.upIndex <= index,
    boardState.throwIndex > 0 && boardState.announcementIndex == null,
    boardState.throwIndex > 0 &&
      ((boardState.throwIndex <= 1 && boardState.announcementIndex == null) ||
        boardState.announcementIndex === index)
  ];

  const handleSelect = i => {
    if (!isValidHint[i]) return;

    if (i < 3 || boardState.announcementIndex === index) {
      // Fill
      values[i] = hintValues[i];
      onCellClick({ row: index, column: i, value: hintValues[i] });
    } else if (boardState.announcementIndex == null) {
      // Announcement
      onCellClick({ row: index, column: i, value: null, isAnnouncement: true });
    }
  };

  return (
    <tr className={className}>
      <td>
        <div className={cx(styles.score, !smallLabel && styles.scoreLarge)}>
          {label}
        </div>
      </td>
      <ScoreCell
        value={values[0]}
        disabled={disabled}
        hintValue={isValidHint[0] && hintValues[0]}
        onSelect={() => handleSelect(0)}
      />
      <ScoreCell
        value={values[1]}
        disabled={disabled}
        hintValue={isValidHint[1] && hintValues[1]}
        onSelect={() => handleSelect(1)}
      />
      <ScoreCell
        value={values[2]}
        disabled={disabled}
        hintValue={isValidHint[2] && hintValues[2]}
        onSelect={() => handleSelect(2)}
      />
      <ScoreCell
        value={values[3]}
        disabled={disabled}
        hintValue={isValidHint[3] && hintValues[3]}
        selected={!disabled && boardState.announcementIndex === index}
        onSelect={() => handleSelect(3)}
      />
      {summarize && (
        <ScoreCell value={values.reduce((sum, val) => sum + val, 0)} disabled />
      )}
    </tr>
  );
};

const Board = props => {
  const { boardValues, onBoardValuesChanged } = props;

  const diceValues = boardValues.diceValues;
  const handleCellClick = action => {
    onBoardValuesChanged(action, boardValues);
  };

  const numberScores = Array(6)
    .fill(0)
    .map((_, i) => diceValues.filter(d => d === i + 1).length * (i + 1));
  const diceValuesSum = diceValues.reduce((a, b) => a + b, 0);
  const minMaxScore = diceValuesSum;

  const diceValuesCount = Array(6)
    .fill()
    .map((_, i) => {
      return {
        value: i + 1,
        count: diceValues.filter(dv => dv === i + 1).length
      };
    });
  const diceValuesAboveTwo = diceValuesCount.filter(dvc => dvc.count >= 2);
  const diceValuesAboveThree = diceValuesCount.filter(dvc => dvc.count >= 3);
  const diceValuesAboveFour = diceValuesCount.filter(dvc => dvc.count >= 4);
  const diceValuesAboveFive = diceValuesCount.filter(dvc => dvc.count >= 5);

  const twoPairsScore =
    diceValuesAboveTwo.length >= 2
      ? diceValuesAboveTwo[0].value * 2 + diceValuesAboveTwo[1].value * 2 + 10
      : diceValuesAboveTwo.length === 1 && diceValuesAboveTwo[0].count >= 4
      ? diceValuesAboveTwo[0].value * 4 + 10
      : 0;
  const smallScaleScore =
    diceValuesAboveTwo.length <= 0 && diceValuesSum === 15 ? 35 : 0;
  const largeScaleScore =
    diceValuesAboveTwo.length <= 0 && diceValuesSum === 20 ? 45 : 0;
  const fullScore =
    diceValuesAboveThree.length > 0 && diceValuesAboveTwo.length > 1
      ? diceValuesAboveThree[0].value * 3 +
        diceValuesAboveTwo.filter(
          dvat => dvat.value !== diceValuesAboveThree[0].value
        )[0].value *
          2 +
        20
      : diceValuesAboveFive.length >= 1
      ? diceValuesAboveFive[0].value * 5 + 20
      : 0;
  const pokerScore =
    diceValuesAboveFour.length > 0 ? diceValuesAboveFour[0].value * 4 + 40 : 0;
  const yambScore =
    diceValuesAboveFive.length > 0 ? diceValuesAboveFour[0].value * 5 + 50 : 0;

  const boardState = {
    downIndex: boardValues.downIndex,
    upIndex: boardValues.upIndex,
    announcementIndex: boardValues.announcementIndex,
    throwIndex: boardValues.throwIndex
  };

  // Sum
  const numbersSum = Array(4)
    .fill()
    .map((_, i) => {
      const sum = boardValues.numberScores.reduce(
        (sum, item) => sum + item[i],
        0
      );
      return sum >= 60 ? sum + 30 : sum;
    });
  const minMaxSum = Array(4)
    .fill()
    .map((_, i) =>
      boardValues.max[i] != null &&
      boardValues.min[i] != null &&
      boardValues.numberScores[0][i] != null
        ? (boardValues.max[i] - boardValues.min[i]) *
          boardValues.numberScores[0][i]
        : null
    );
  const specialSum = Array(4)
    .fill()
    .map(
      (_, i) =>
        boardValues.twoPairs[i] +
        boardValues.scale[i] +
        boardValues.poker[i] +
        boardValues.full[i] +
        boardValues.yamb[i]
    );

  let rowIndex = 0;

  return (
    <div className={styles.tableContainer}>
      <table className={styles.jambTable}>
        <tbody>
          <tr>
            <td></td>
            <td>
              <div className={cx(styles.score, styles.scoreLarge)}>⬇</div>
            </td>
            <td>
              <div className={cx(styles.score, styles.scoreLarge)}>⬆</div>
            </td>
            <td>
              <div className={cx(styles.score, styles.scoreLarge)}>⬇⬆</div>
            </td>
            <td>
              <div className={styles.score}>NAJAVA</div>
            </td>
          </tr>
          {Array(6)
            .fill()
            .map((_, i) => (
              <ScoreRow
                index={rowIndex++}
                label={i + 1}
                values={boardValues.numberScores[i]}
                hintValues={Array(4).fill(numberScores[i])}
                boardState={boardState}
                onCellClick={handleCellClick}
              />
            ))}
          <ScoreRow
            disabled
            label="∑"
            summarize
            className={styles.sum}
            values={numbersSum}
          />
          <ScoreRow
            index={rowIndex++}
            label={"MAX"}
            smallLabel
            values={boardValues.max}
            hintValues={Array(4).fill(minMaxScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            index={rowIndex++}
            label={"MIN"}
            smallLabel
            values={boardValues.min}
            hintValues={Array(4).fill(minMaxScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            disabled
            label="RAZLIKA X1"
            summarize
            smallLabel
            className={styles.sum}
            values={minMaxSum}
          />
          <ScoreRow
            index={rowIndex++}
            label={"2 PARA"}
            smallLabel
            values={boardValues.twoPairs}
            hintValues={Array(4).fill(twoPairsScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            index={rowIndex++}
            label={"SKALA"}
            smallLabel
            values={boardValues.scale}
            hintValues={Array(4).fill(largeScaleScore || smallScaleScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            index={rowIndex++}
            label={"FULL"}
            smallLabel
            values={boardValues.full}
            hintValues={Array(4).fill(fullScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            index={rowIndex++}
            label={"POKER"}
            smallLabel
            values={boardValues.poker}
            hintValues={Array(4).fill(pokerScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            index={rowIndex++}
            label={"JAMB"}
            smallLabel
            values={boardValues.yamb}
            hintValues={Array(4).fill(yambScore)}
            boardState={boardState}
            onCellClick={handleCellClick}
          />
          <ScoreRow
            disabled
            label="∑"
            className={styles.sum}
            summarize
            values={specialSum}
          />
          <tr className={styles.sum}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="2">
              <div
                className={cx(
                  styles.score,
                  styles.scoreDisabled,
                  styles.scoreLarge
                )}
              >
                {numbersSum.reduce((sum, val) => sum + val, 0) +
                  minMaxSum.reduce((sum, val) => sum + val, 0) +
                  specialSum.reduce((sum, val) => sum + val, 0)}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
