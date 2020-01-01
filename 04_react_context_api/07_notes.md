# Lesson 07 - Provide Remaining Actions to Child Components

- passing function to consumer works the same as passing data
    - this allows to bring data from child component to parent without **prop drilling**
- Note that not all tags need to be wrapped in `<Consumer>`
    - only the part that needs the accessing of provider does

    AddPlayerForm.js
    ```
    import React, { Component } from 'react';

    class AddPlayerForm extends Component {

    playerInput = React.createRef();

    render() {
        return (
            <Consumer>
            { context => {
                const handleSubmit = (e) => {
                    e.preventDefault();
                    context.actions.addPlayer(playerInput.current.value);
                    e.currentTarget.reset();
                }

                return (
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        ref={this.playerInput}
                        placeholder="Enter a player's name"
                        />

                        <input
                        type="submit"
                        value="Add Player"
                        />
                    </form>
                );
            }}
            </Consumer>
        );
    }

    export default AddPlayerForm;
    ```