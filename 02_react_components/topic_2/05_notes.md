# Lesson 05 - Building the Statistics Component

- with state being at the uppermost level, the information can now be propagated to any other components

Stats.js
```
const Stats = (props) => {

    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce((total, player) => {
        return total + player.score;
    },0)

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
```


Header.js
```
import React from 'react';
import Stats from './Stats';

const Header = (props) => {
    return (
        <header>
            <Stats players={props.players} />
            <h1>{ props.title }</h1>
            <span className="stats">Players
        </header>
    );
}

```