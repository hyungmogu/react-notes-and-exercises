# Lesson 05 - Updating State

- **State** is never modified directly

    ```
    incrementScore() {
        this.state.score +=1 // this is a No No.
    }
    ```

    - instead, built-in `setState()` method is used
    - inside is an object with the value to be updated

    ```
    class Counter extends React.component {
        constructor() {
            super();
            this.state = {
                score: 0
            }
        }

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