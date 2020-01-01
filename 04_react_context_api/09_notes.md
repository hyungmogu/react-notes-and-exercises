# Lesson 09 - Refactor the Consumers

- with **destructuring**, codes in consumer can be simplified


    PlayerList.js - Before change
    ```
    import React from 'react';
    import Consumer from './Context';
    import Player from './Player';

    const PlayerList = () => {
        return (
            <Consumer>
                {context => {
                    <React.Fragment>
                        {context.players.map((player, index) =>
                            <Player
                                {...player}
                                key={player.id.toString()}
                                index={index}
                                changeScore={context.changeScore} // this is removed because it can be directly accessed in consumer
                                removePlayer={context.removePlayer} // this is removed because it can be directly accessed in consumer
                            >
                        )}
                    </React.Fragment>
                }}
            </Consumer>
        );
    }

    export default PlayerList;
    ```

    PlayerList.js - After change
    ```
    import React from 'react';
    import Consumer from './Context';
    import Player from './Player';

    const PlayerList = () => {
        return (
            <Consumer>
                {({players}) => {
                    <React.Fragment>
                        {players.map((player, index) =>
                            <Player
                                {...player}
                                key={player.id.toString()}
                                index={index}
                            >
                        )}
                    </React.Fragment>
                }}
            </Consumer>
        );
    }

    export default PlayerList;
    ```




