# Lesson 08 - Refactor the Provider


- `<App>` can be cleaned by using **Higher Order Component**
    - A technique in React for reusing component logic. A HOC takes an existing component and returns a new component


    components/Context/index.js
    ```
    import React in 'react';
    const ScoreboardContext = React.createContext();

    export class Provider extends Component {
        state = {
            players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
            ]
        };

        // player id counter
        prevPlayerId = 4;

        handleScoreChange = (index, delta) => {
            this.setState( prevState => {
            // New 'players' array – a copy of the previous `players` state
            const updatedPlayers = [ ...prevState.players ];
            // A copy of the player object we're targeting
            const updatedPlayer = { ...updatedPlayers[index] };

            // Update the target player's score
            updatedPlayer.score += delta;
            // Update the 'players' array with the target player's latest score
            updatedPlayers[index] = updatedPlayer;

            // Update highest score
            let scores = this.state.players.map(x => x.score);
            this.maxScore = Math.max(scores);

            // Update the `players` state without mutating the original state
            return {
                players: updatedPlayers
            };
            });
        }

        handleAddPlayer = (name) => {
            this.setState( prevState => {
            return {
                players: [
                ...prevState.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
                ]
            };
            });
        }

        handleRemovePlayer = (id) => {
            this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
            });
        }

        getMaxScore() {
            let scores = this.state.players.map(x => x.score);
            return Math.max(...scores);
        }

        render() {
            return (
                <ScoreboardContext.Provider value={{
                    players: this.state.players,
                    action: {
                        changeScore: this.handleScoreChange,
                        removePlayer: this.handleRemovePlayer
                    }
                    }}> // Wrap all in <Provider>!!


                    {this.props.children}
                </ScoreboardContext.Provider>
            );
        }
    }
    export const Consumer = ScoreboardContext.Consumer;
    ```

    - Note that `this.props.children` passes anything that's in `<ScoreboardContext.Provider>` to its children


    App.js
    ```
    import React, { Component } from 'react';
    import Header from './Header';
    import Player from './Player';
    import AddPlayerForm from './AddPlayerForm';

    class App extends Component {

    render() {
        let maxScore = this.getMaxScore();

        return (
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
        );
    }}

    export default App;
    ```

    index.js
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';

    import App from './components/App';
    import { Provider } from './components/Context'
    import './index.css';

    ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
    );


    ```