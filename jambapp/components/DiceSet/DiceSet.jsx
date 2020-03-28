import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import styles from './DiceSet.module.scss';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const DiceSet = (props) => {
    const [diceValues, setDiceValues] = useState([
        {
            value: 1,
            isSelected: false
        },
        {
            value: 1,
            isSelected: false
        },
        {
            value: 1,
            isSelected: false
        },
        {
            value: 1,
            isSelected: false
        },
        {
            value: 1,
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

    const onDiceClick = (i) => {
            diceValues[i].isSelected = !diceValues[i].isSelected;

        setDiceValues([...diceValues]);
    };

    return (
        <div className={styles.root}>
            <div className={styles.throwIndicator}>
                {Array(3).fill(1).map((item, i) => (
                    <div>{i + 1}</div>
                ))}
                <div>test</div>
            </div>
            <div className={styles.dice}>
                {diceValues.map((diceValue, i) => (
                    <div className={styles.diceContainer} onClick={() => onDiceClick(i)}>
                        <Dice key={'dice' + i} value={diceValue.value} isSelected={diceValue.isSelected} />
                    </div>
                ))}
            </div>
            <button className={styles.throwButton} onClick={onThrow} disabled={!canThrow}>Baci</button>
        </div>
    );
};

export default DiceSet;