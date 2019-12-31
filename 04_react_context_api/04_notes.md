# Lesson 04 - Provide and Consume State

- Consumer allows the access of data in Provider without **prop drilling**
- Consumer is a part of context

## Consumer

- to consume provided data, first import Consumer in a component wrapped in Provider
- with the following, `props`, `<COMPONENT>.propTypes`, `<COMPONENT>.defaultProps` can be removed
    - and this cleans up a lot of codes

    Example

    Stat.js - before code clean up

    ```
    import React from 'react';
    import { Consumer } from './Context'
    import PropTypes from 'prop-types';

    const Stats = (props) => {
    return (
        <Consumer>
            { context => {
                const totalPlayers = props.players.length;
                const totalPoints = props.players.reduce( (total, player) => {
                    return total + player.score;
                }, 0);

                return (
                    <table className="stats">
                    <tbody>
                        <tr>
                        <td>Players:</td>
                        <td>{ totalPlayers }</td>
                        </tr>
                        <tr>
                        <td>Total Points:</td>
                        <td>{ totalPoints }</td>
                        </tr>
                    </tbody>
                    </table>
                );
            }}
        </Consumer>
    );
    }

    // this can be removed!!
    Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })).isRequired
    };

    export default Stats;
    ```

    Stat.js - after code clean up

    ```
    import React from 'react';
    import { Consumer } from './Context'

    const Stats = () => {
    return (
        <Consumer>
            { context => {
                const totalPlayers = context.length;
                const totalPoints = context.reduce( (total, player) => {
                    return total + player.score;
                }, 0);

                return (
                    <table className="stats">
                    <tbody>
                        <tr>
                        <td>Players:</td>
                        <td>{ totalPlayers }</td>
                        </tr>
                        <tr>
                        <td>Total Points:</td>
                        <td>{ totalPoints }</td>
                        </tr>
                    </tbody>
                    </table>
                );
            }}
        </Consumer>
    );
    }

    export default Stats;
    ```
