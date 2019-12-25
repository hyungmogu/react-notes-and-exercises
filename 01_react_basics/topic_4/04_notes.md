# Lesson 04 - Handling Events

- events are generated by creating methods inside class methods
    - is passed without `()` in `METHOD_NAME()` to call the function only when the event is activated

    Example
    ```
    class Counter extends React.component {
        constructor() {
            super();
            this.state = {
                score: 0
            }
        }

        incrementScore() {
            console.log('this is inside increment score');
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