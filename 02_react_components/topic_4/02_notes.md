# Lesson 02 - Destructuring Props

- **Destructuring** takes out variables from props/states or objects
    - it keeps code cleaner and more maintainable

        Example
        ```
        {hello, world} = this.props;

        ```
        - with the above, `this.props` can be taken out
        - the following takes out value of `hello` and `world` in `{'hello': 1, 'world': 2}`, and stores in corresponding variable


        Counter.js - before destructuring
        ```
            const Counter = (props) => {
                return (
                    <div className="counter">
                        <button
                            className="counter-action decrement"
                            onClick={() => props.changeScore(-1)}
                        >
                            -
                        </button>
                        <span className="counter-score">
                            { props.score }
                        </span>
                        <button
                            className="counter-action increment"
                            onClick={() => props.changeScore(1)}
                        >
                            +
                        </button>
                    </div>
                );
            }
        ```

        Counter.js - after destructuring
        ```
            const Counter = ({changeScore, score}) => {
                return (
                    <div className="counter">
                        <button
                            className="counter-action decrement"
                            onClick={() => changeScore(-1)}
                        >
                            -
                        </button>
                        <span className="counter-score">
                            { score }
                        </span>
                        <button
                            className="counter-action increment"
                            onClick={() => changeScore(1)}
                        >
                            +
                        </button>
                    </div>
                );
            }
        ```
