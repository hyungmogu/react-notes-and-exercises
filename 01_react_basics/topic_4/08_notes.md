# Lesson 08 - Update State Based on Previous State


- `this.state` is a poor way to rely on when updating previous state
    - is corrected by using **arrow** function within method

    Before
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
            this.setState( prevState => {
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

