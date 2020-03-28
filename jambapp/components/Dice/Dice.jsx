import React from 'react';
import cx from 'clsx';
import styles from './Dice.module.scss';

const Dice = (props) => {
    const {
        value,
        isSelected,
    } = props;

    return (
        <div className={cx(isSelected && styles.selected, styles.selectionContainer)}>
            <div className={styles.root}>{value}</div>
        </div>
    );
};

export default Dice;