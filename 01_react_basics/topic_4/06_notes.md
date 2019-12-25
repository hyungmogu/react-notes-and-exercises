# Lesson 06 - Bind Event Handlers to Components

- `this` in the previous lecture is retuning undefined
    - it needs to be binded before use
    - is done by writing the statemethod in **arrow function**

    Before
    ```
    class Counter extends React.component {
        constructor() {
            super();
            this.state = {
                score: 0
            }
        }

        // here, this returns undefined
        incrementScore() {
            this.setState({
                score: this.state.score += 1
            })
        }

        render() {
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        }

    }
    ```

    After
    ```
    class Counter extends React.component {
        constructor() {
            super();
            this.state = {
                score: 0
            }
        }

        // see the arrow function here
        incrementScore = () => {
            this.setState({
                score: this.state.score += 1
            })
        }

        render() {
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        }

    }
    ```