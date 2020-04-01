import React from "react";
import cx from "clsx";
import styles from "./Dice.module.scss";

const Dice = props => {
  const { value, isSelected, isRolling } = props;

  let diceValueStyle = styles.diceValue0;
  switch (value) {
    case 1:
      diceValueStyle = styles.diceValue1;
      break;
    case 2:
      diceValueStyle = styles.diceValue2;
      break;
    case 3:
      diceValueStyle = styles.diceValue3;
      break;
    case 4:
      diceValueStyle = styles.diceValue4;
      break;
    case 5:
      diceValueStyle = styles.diceValue5;
      break;
    case 6:
      diceValueStyle = styles.diceValue6;
      break;
    default:
      break;
  }

  const rollingStyle = styles[`rollingStyle${Math.floor(Math.random() * 4)}`];

  return (
    <div
      className={cx(isSelected && styles.selected, styles.selectionContainer)}
    >
      <div
        className={cx(
          styles.root,
          styles.diceValue,
          diceValueStyle,
          !isSelected && isRolling && styles.rolling,
          !isSelected && isRolling && rollingStyle
        )}
      ></div>
    </div>
  );
};

export default Dice;
