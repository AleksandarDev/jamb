import React, { useState } from "react";
import Dice from "../Dice/Dice";
import styles from "./DiceSet.module.scss";
import cx from "clsx";
import { Grid, Button } from "@material-ui/core";
import { useEffect } from "react";

let roll1 = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const DiceSet = (props) => {
  const { currentRound, throwIndex, onDiceValueChange } = props;
  const [diceValues, setDiceValues] = useState([
    {
      value: 0,
      isSelected: false,
    },
    {
      value: 0,
      isSelected: false,
    },
    {
      value: 0,
      isSelected: false,
    },
    {
      value: 0,
      isSelected: false,
    },
    {
      value: 0,
      isSelected: false,
    },
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
  }, [currentRound]);

  const handleDiceClick = (i) => {
    if (diceValues[i].value <= 0) return;
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
    onDiceValueChange(diceValues.map((d) => d.value));

    // Roll dice
    setIsRolling(true);
    setTimeout(() => setIsRolling(false), 400);

    // Play sound
    if (roll1 == null) roll1 = new Audio("/roll1.mp3");
    roll1.play();
  };

  const [isRolling, setIsRolling] = useState(false);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
          spacing={1}
        >
          {diceValues.map((diceValue, i) => (
            <Grid item onClick={() => handleDiceClick(i)}>
              <Dice
                key={"dice" + i}
                value={diceValue.value}
                isSelected={diceValue.isSelected}
                isRolling={isRolling}
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
          <img src="/throw.png" width={30} height={30} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default DiceSet;
