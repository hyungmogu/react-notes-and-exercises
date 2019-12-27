# Lesson 08 - Update the Players State Based on Previous State


- Note in previous lesson, `...this.state.players` represent all items in array `this.state.players`

    App.js
    ```
    ...

    class App extends Components {

        // this guy here.
        state = {
            players: [
                {
                    'name': 'Guil',
                    'score': 1,
                    'id': 1
                }
            ]
        }

        ...
    }
    ```

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71498403-1d56bc00-2811-11ea-956f-63da3ac10f60.png">
    </div>


- to update state, React recommends to use `prevState` parameter

    App.js
    ```
    ...

    class App extends Components {

        ...

        playerId = this.state.players.length;

        handleAddPlayer = (name) => {
            this.setState( prevState => {
                players: [
                    ...this.state.players, // this adds existing players without modifying the array
                    {
                        'name': name,
                        'score': 0,
                        'id': this.playerId += 1
                    }
                ]
            })

        }

        render() {
            return (
                <div className="scoreBoard">
                    ...

                    <AddPlayerForm
                        addPlayer={this.handleAddPlayer}
                    />
                </div>
            );
        }
    }
    ```