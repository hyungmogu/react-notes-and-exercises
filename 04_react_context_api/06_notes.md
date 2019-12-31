# Lesson 06 - Provide and Consume Actions


- value in `<Provider value={this.state.players}>` is not limited to list of objects
    - can also contain function

    Example

    App.js
    ```
    import React, { Component } from 'react';
    import { Provider } from './Context'
    import Header from './Header';
    import Player from './Player';
    import AddPlayerForm from './AddPlayerForm';

    class App extends Component {

    ...

    render() {
        let maxScore = this.getMaxScore();

        return (
        <Provider value={{
            players: this.state.players,
            action: {
                changeScore: this.handleScoreChange,
                removePlayer: this.handleRemovePlayer
            }
            }}> // Wrap all in <Provider>!!
            <div className="scoreboard">
                <Header players={this.state.players} />

                {/* Players list */}
                {this.state.players.map( (player, index) =>
                <Player
                    name={player.name}
                    score={player.score}
                    id={player.id}
                    key={player.id.toString()}
                    index={index}
                    changeScore={this.handleScoreChange}
                    isHighestScore={player.score === maxScore}
                    removePlayer={this.handleRemovePlayer}
                />
                )}

                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        </Provider>
        );
    }
    }

    export default App;
    ```

    PlayerList.js - Solution
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
                                changeScore={context.changeScore}
                                removePlayer={context.removePlayer}
                            >
                        )}
                    </React.Fragment>
                }}
            </Consumer>
        );
    }

    export default PlayerList;
    ```
