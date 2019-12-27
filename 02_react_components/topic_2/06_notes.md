# Lesson 06 - Controlled Components


## Adding Input Component 'AddPlayerForm'


<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71494393-d3171000-27fb-11ea-90f3-07c2de30fc37.png">
</div>

    AddPlayerForm.js
    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {
        render() {
            <form>
                <input
                    type="text"
                    placeholder="Enter a Player's Name"
                />

                <input
                    type="text"
                    value="Add Player"
                />
            </form>
        }
    }

    export default AddPlayerForm;
    ```

    App.js
    ```
    import React, { Component } from 'react';
    import Header from './Header';
    import Player from './Player';
    import AddPlayerForm from './AddPlayerForm';

    class App extends Components {
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

                    <AddPlayerForm />
                </div>
            );
        }
    }
    ```


## Creating a Controlled Component

- using `value` attribute doesn't allow input values to be changed

    AddPlayerForm.js
    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {
        render() {
            <form>
                <input
                    type="text"
                    value="Guil" // Nono. This will not allow input to change
                    placeholder="Enter a Player's Name"
                />

                <input
                    type="text"
                    value="Add Player"
                />
            </form>
        }
    }

    export default AddPlayerForm;
    ```

- To change predefined value in input, we need to
    1. create changes in the input to detect when value is updated

    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {
        state = {
            value: ''
        }

        render() {
            <form>
                <input
                    type="text"
                    value={this.state.value} // Note this is added to store changes in real time
                    onChange={this.handleValueChange} // Note this is added to watch changes in real time
                    placeholder="Enter a Player's Name"
                />

                <input
                    type="text"
                    value="Add Player"
                />
            </form>
        }
    }

    export default AddPlayerForm;
    ```

    2. create an event handler that updates the value state

    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {

        ...

        handleValueChange = (e) => {
            this.setState({ value: e.target.value }) // Note: e.target.value gets value from input
        }

        render() {
           ...
        }
    }

    export default AddPlayerForm;
    ```
