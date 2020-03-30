import React, { useState } from "react";
import Dice from "../Dice/Dice";
import styles from "./DiceSet.module.scss";
import cx from "clsx";
import { Grid, Button } from "@material-ui/core";
import { useEffect } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const DiceSet = props => {
  const { currentRound, throwIndex, onDiceValueChange } = props;
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

  const [canThrow, setCanThrow] = useState(true);
  useEffect(() => {
    setCanThrow(throwIndex < 3);
  }, [throwIndex]);

  const [round, setRound] = useState(0);
  const reset = () => {
    for (let i = 0; i < diceValues.length; i++) {
      diceValues[i].value = 0;
      diceValues[i].isSelected = false;
    }
    setDiceValues([...diceValues]);
  };
  useEffect(() => {
    if (currentRound != round) {
      reset();
    }
    setRound(currentRound);
  });

  const handleDiceClick = i => {
    diceValues[i].isSelected = !diceValues[i].isSelected;
    setDiceValues([...diceValues]);
  };

  const handleThrow = () => {
    for (let i = 0; i < diceValues.length; i++) {
      if (!diceValues[i].isSelected) {
        diceValues[i].value = getRandomInt(6) + 1;
      }
    }

    setDiceValues([...diceValues]);
    onDiceValueChange(diceValues.map(d => d.value));
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
            <Grid item onClick={() => handleDiceClick(i)}>
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
                    throwIndex > i && styles.throwIndicatorStepUsed
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
          onClick={handleThrow}
          disabled={!canThrow}
        >
          <img src="/static/throw.png" width={30} height={30} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default DiceSet;
