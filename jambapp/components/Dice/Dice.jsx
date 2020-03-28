import React from "react";
import cx from "clsx";
import styles from "./Dice.module.scss";

const Dice = props => {
  const { value, isSelected } = props;

  let diceValueStyle = null;
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

  return (
    <div
      className={cx(isSelected && styles.selected, styles.selectionContainer)}
    >
      <div className={cx(styles.root, diceValueStyle, styles.diceValue)}></div>
    </div>
  );
};

export default Dice;
