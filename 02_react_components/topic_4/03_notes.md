# Lesson 03 - Refs and the DOM

## createRef() and when to use it
- `createRef()` is useful when change is not required on each single key stroke

    i.e.

    clicking `submit` after typing `hello` input

- `createRef()` cleans up and simplifies a lot of code if used properly

    AddPlayerForm.js - before applying createRef()
    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {
        state = {
            value: ''
        }

        handleValueChange = (e) => {
            this.setState({value: e.target.value});
        }

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addPlayer(this.state.value);
            this.setState({ value: '' })
        }

        render() {
            return(
                <form onSubmit={this.handleSubmit}>
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
            );
        }
    }

    export default AddPlayerForm;
    ```

    AddPlayerForm.js - after applying createRef()
    ```
    import React, {Component} from 'react';

    class AddPlayerForm extends Component {
        playerInput = React.createRef();

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addPlayer(this.state.value);
        }

        render() {
            return(
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        ref={this.playerInput}
                        placeholder="Enter a Player's Name"
                    />

                    <input
                        type="text"
                        value="Add Player"
                    />
                </form>
            );
        }
    }

    export default AddPlayerForm;
    ```
    - this simplifies a lot