# Lesson 07 - Adding Items to State

- this lesson goes over how to add items after submit in input

    1. First is to create an event handler that brings submitted value to higher state

    AddPlayerForm.js
    ```
    import React, { Component } from 'react';

    class AddPlayerForm extends Component {

        state = {
            value: ''
        }

        ...

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addPlayer(this.state.value);
            this.setState({
                'value': ''
            })
        }

        render() {
            <form onSubmit={this.handleSubmit}>

            ...
        }
    }
    ```

    2. Second is to add value brought from child component to its state

    App.js
    ```
    ...

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

