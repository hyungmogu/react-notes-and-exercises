# Lesson 02 - Lifting State Up

## Lifting State Up
- is the act of putting stateful component to highest level possible
    - this is called **Lifting State Up**
    - in the example below, there are two stateful components: App and counter
    - for maintainability purposes, stateful components are to be kept as minimum - App

    App.js
    ```
    const App = (props) => {
        state = {
            players: [
                {
                    'name': 'Guil',
                    'score': 1,
                    'id': 1
                }
            ]
        }

        handleRemovePlayer = (id) => {
            this.setState(prevState => {
                return {
                    players: prevState.players.filter(p => p.id !== id)
                }
            });
        }

        render() {
            return (
                <div className="scoreBoard">
                    <Header
                        title="scoreboard"
                        totalPlayers={props.initialPlayers.length}
                    />

                    {/*Players List*/}
                    {/*Fow now the components are static*/}
                    {props.initialPlayers.map(player =>
                        <Player
                            name={player.name}
                            score={player.score} // note that score is passed down
                            removePlayer={this.handleRemovePlayer}
                            // this adds method 'removePlayer' to component
                            id={player.id}
                            // this passes player id to player component
                        />

                    )}
                </div>
            );
        }
    }
    ```

    Player.js
    ```
        const Player = (props) => {
            return (
                <div className="player">
                    <span className="player-name">
                        // Note here that removePlayer is accessed via props
                        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                        {props.name}
                    </span>

                    // note that score is passed down from Player to counter
                    <Counter score={props.score}/>
                </div>
            );
        }
    ```

    Counter.js
    ```
        const Counter = (props) => {
            return (
                <div className="counter">
                    <button className="counter-action decrement">-</button>
                    <span className="counter-score">{ props.score }</span>
                    <button className="counter-action increment">+</button>
                </div>
            );
        }
    ```