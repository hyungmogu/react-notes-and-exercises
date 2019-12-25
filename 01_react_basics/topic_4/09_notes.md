
# Lesson 09 - Creating Application State

- **Component State** is state that is specific to a element
    - is not shared outside of component
    - is also called **Local Component State**

- **Application State** is data available to the entire application
    - resides in `<App/>` component

    ```
    const App = (props) => {
        // Note that this is application state
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
                        />

                    )}
                </div>
            );
        }
    }
    ```