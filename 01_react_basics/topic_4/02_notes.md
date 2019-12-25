# Lesson 02 - Create a Component as a Class


- class components extend from `React.Component`
    - instead of `props.<NAME>`, `this.props.<NAME>` is used
    - all in return is put inside `render()` method

    Before
    ```
    const Counter = () => {
        return (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">35</span>
                <button className="counter-action increment">+</button>
            </div>
        );
    }
    ```

    After
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