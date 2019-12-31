# Lesson 03 - Create Context

- context is used to prevent **prop drilling** or manually defining props to pass data from a parent component to it's child

## Setting up
- Under `Context` directory, add `index.js` file
- in `index.js` file, initialize context and export provider and consumer


    Example
    ```
    import React in 'react';
    const ScoreboardContext = React.createContext();

    export const Provider = ScoreboardContext.Provider;
    export const Consumer = ScoreboardContext.Consumer;
    ```

- in `App.js`, import provider and add wrap all rendering components in `<Provider/>`

    Example
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
        <Provider> // Wrap all in <Provider>!!
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