import React from 'react';
import styles from './Board.module.scss';
import cx from 'clsx';

const Board = (props) => {
    return (
        <div className={styles.tableContainer}>
        <table className={styles.jambTable}>
            <tbody>
            <tr>
                <td></td>
                <td><div className={cx(styles.score, styles.scoreLarge)}>⬇</div></td>
                <td><div className={cx(styles.score, styles.scoreLarge)}>⬆</div></td>
                <td><div className={cx(styles.score, styles.scoreLarge)}>⬇⬆</div></td>
                <td><div className={styles.score}>NAJAVA</div></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>1</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>2</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>3</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>4</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>5</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={cx(styles.score, styles.scoreLarge)}>6</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr className={styles.sum}>
                <td><div className={cx(styles.score, styles.scoreLarge)}>∑</div></td>
                <td><div className={styles.score}></div></td>
                <td><div className={styles.score}></div></td>
                <td><div className={styles.score}></div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>MAX</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>MIN</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr className={styles.sum}>
                <td><div className={styles.score}>RAZLIKA x1</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>2 PARA</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>SKALA</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>FULL</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>POKER</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr>
                <td><div className={styles.score}>JAMB</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr className={styles.sum}>
                <td><div className={cx(styles.score, styles.scoreLarge)}>∑</div></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
                <td><div className={styles.score} /></td>
            </tr>
            <tr className={styles.sum}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="2"><div className={styles.score}></div></td>
            </tr>
            </tbody>
        </table>
        </div>
    );
};

export default Board;