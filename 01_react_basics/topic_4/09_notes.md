
# Lesson 09 - Creating Application State

- **Component State** is state that is specific to a element
- **Application State** is data available to the entire application

- removal of an item from list can be done using array's `.filter()` method
- method can be declared at app level and passed down to components

    ```
        ...

        // This removes player from list
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
                            score={player.score}
                            removePlayer={this.handleRemovePlayer}
                            // this adds method 'removePlayer' to component
                            id={player.id}
                            // this passes player id to player component
                        />

                    )}
                </div>
            );
        }

    ```

    Full example
    ```
    const App = (props) => {
        state = {
            players: [
                {
                    'name': 'Guil',
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
                            score={player.score}
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


- Player is removed by accessing `.removePlayer()` method in props of `Player` component

    ```
    const Player = (props) => {
        return (
            <div className="player">
                <span className="player-name">
                    // Note here that removePlayer is accessed via props
                    <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                    {props.name}
                </span>

                <Counter/>
            </div>
        );
    }
    ```