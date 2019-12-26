# Lesson 03 - Communicating Between Components

- data flows downward. How to bring the data up?

## Communicating Between Components
- Components can be communicated using **callback function**

<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71459166-06559280-275b-11ea-840e-dd020eb8c6ba.png">
</div>

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

        handleScoreChange = (id) => {
            this.setState(prevState => {
                return {
                    players: prevState.players.filter(p => p.id !== id)
                }
            });
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
                            changeScore = {this.handleSchangeOrd}
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

