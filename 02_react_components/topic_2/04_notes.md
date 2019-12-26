# Lesson 04 - Communicating Between Components

- to handle changes in data index in player is passed to **callback function**
    - because using **map** or **filter** takes a long time, and not resource friendly


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

        // note scoreChange method in cla
        handleScoreChange = (id) => {
            this.setState(prevState => {
                return {
                    players: prevState.players[index ]
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
                        players={this.state.players}
                    />

                    {/*Players List*/}
                    {/*Fow now the components are static*/}


                    // Note that index is passed from here to Player and counter component
                    {props.initialPlayers.map((index, player) =>
                        <Player
                            name={player.name}
                            score={player.score} // note that score is passed down
                            removePlayer={this.handleRemovePlayer}
                            index={index}
                            changeScore = {this.handleScoreChange}
                            id={player.id}
                        />

                    )}
                </div>
            );
        }
    }
    ```

    Headers.js
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
                    <Counter score={props.score} changeScore={pros.changesc}/>
                </div>
            );
        }
    ```

    Counter.js
    ```
        const Counter = (props) => {

            // Note that index from Player is passed to props.changeScore(
            let index = props.index;

            return (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => this.props.changeScore(index, -1)}>-</button>
                    <span className="counter-score">{ props.score }</span>
                    <button className="counter-action increment" onClick={() => this.props.changeScore(index, 1)}>+</button>
                </div>
            );
        }
    ```


- index in counter is passed to `handleScoreChange`
- passed index is used to handle change