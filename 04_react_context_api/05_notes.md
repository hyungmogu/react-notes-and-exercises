# Lesson 05 - The Provider and Consumer Solution

- This lesson addresses problem of adding Consumer component to PlayerList.js containing `<React.Fragment>`
    - `<React.Fragment>` is a empty container that dissolves once it renders like a medicine pill :)
    - it's purpose is to reduce unnecessary wrappers (i.e. `<div>`, `<section>`)


    PlayerList.js - Challenge
    ```
    import React from 'react';
    import PropTypes from 'prop-types';
    import Player from './Player';

    const PlayerList = (props) => {
        return (
            <React.Fragment>
                {props.players.map((player, index) =>
                    <Player
                        {...player}
                        key={player.id.toString()}
                        index={index}
                        changeScore={props.changeScore}
                        removePlayer={props.removePlayer}
                    >
                )}
            </React.Fragment>
        );
    }

    export default PlayerList;
    ```

    PlayerList.js - Solution
    ```
    import React from 'react';
    import Consumer from './Context';
    import Player from './Player';

    const PlayerList = (props) => {
        return (
            <Consumer>
                {context => {
                    <React.Fragment>
                        {context.map((player, index) =>
                            <Player
                                {...player}
                                key={player.id.toString()}
                                index={index}
                                changeScore={props.changeScore}
                                removePlayer={props.removePlayer}
                            >
                        )}
                    </React.Fragment>
                }}
            </Consumer>
        );
    }

    export default PlayerList;
    ```




