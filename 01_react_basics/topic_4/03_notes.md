# Lesson 03 - Create a Stateful Component


- state is created inside `constructor()` method
    - it is first given an initialized state
    - `this.state` is used instead of `this.props`

    Before
    ```
    class Counter extends React.Component {
        render() {
            return(
                <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <span className="counter-score">{this.props.score}</span>
                    <button className="counter-action increment"> + </button>
                </div>
            );
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

        render() {
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        }

    }
    ```

    - constructor can be omitted altogether since it's being transpiled using babel

    Approach 2
    ```
    class Counter extends React.component {

        state = {
            score: 0
        }

        render() {
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        }

    }
    ```