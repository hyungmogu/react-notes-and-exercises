# Lesson 04 - Validate Props with PropTypes


- what happens if improper prop types or none is passed?
    - in current case, none!

- prop types provide helpful warnings if incorrect type is passed

<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71537155-b39be800-28cc-11ea-8ccc-68895780220f.png">
</div>

## Prop Type Checking Different Data Types

    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    const Counter = (props) => {

        let index = props.index;

        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(index, -1)}>-</button>
                <span className="counter-score">{ props.score }</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(index, 1)}>+</button>
            </div>
        );
    }

    Counter.propTypes = {
        index: propTypes.number,
        score: propTypes.number,
        changeScore: propTypes.func
    };

    export default Counter;
    ```


## Prop Type Checking List of Objects
- `PropTypes.arrayOf` and `PropTypes.shape` is used

    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    const Stats = (props) => {
        const totalPlayers = props.players.length;
        const totalPoints = props.players.reduce((total, player) => {
            return total + player.score;
        }, 0);

        return (
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Total Points:</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    Stats.propTypes = {
        // prop type checking list of objects
        players: PropTypes.arrayOf(PropTypes.shape({
            score: propTypes.number,

        }))
    }

    export default Stats;
    ```