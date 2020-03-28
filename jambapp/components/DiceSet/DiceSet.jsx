import React, { useState } from "react";
import Dice from "../Dice/Dice";
import styles from "./DiceSet.module.scss";
import cx from "clsx";
import { Grid, Button } from "@material-ui/core";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const DiceSet = props => {
  const [diceValues, setDiceValues] = useState([
    {
      value: 0,
      isSelected: false
    },
    {
      value: 0,
      isSelected: false
    },
    {
      value: 0,
      isSelected: false
    },
    {
      value: 0,
      isSelected: false
    },
    {
      value: 0,
      isSelected: false
    }
  ]);
  const [throwCount, setThrowCount] = useState(0);
  const [canThrow, setCanThrow] = useState(true);

  const onThrow = () => {
    setCanThrow(throwCount < 2);
    setThrowCount(throwCount + 1);

    for (let i = 0; i < diceValues.length; i++) {
      if (!diceValues[i].isSelected) {
        diceValues[i].value = getRandomInt(6) + 1;
      }
    }
    setDiceValues([...diceValues]);
  };

  const onDiceClick = i => {
    diceValues[i].isSelected = !diceValues[i].isSelected;

    setDiceValues([...diceValues]);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
        >
          {diceValues.map((diceValue, i) => (
            <Grid item onClick={() => onDiceClick(i)}>
              <Dice
                key={"dice" + i}
                value={diceValue.value}
                isSelected={diceValue.isSelected}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {Array(3)
            .fill(1)
            .map((item, i) => (
              <Grid item>
                <span
                  className={cx(
                    styles.throwIndicatorStep,
                    throwCount > i && styles.throwIndicatorStepUsed
                  )}
                >
                  {i + 1}
                </span>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={styles.throwButton}
          onClick={onThrow}
          disabled={!canThrow}
        >
          <img src="/static/throw.png" width={30} height={30} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default DiceSet;
