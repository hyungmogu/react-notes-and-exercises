# Lesson 3 Notes - Use a Component with JSX


- <FUNCTION_NAME> is placed in ReactDOM.render() to render the component
    - <FUNCTION_NAME /> and <FUNCTION_NAME></FUNCTION_NAME> are both allowed
    - <FUNCTION_NAME /> is called `self-enclosed` tag

    Example
    ```
        function Header() {
            return (
                <header>
                    <h1>Scoreboard</h1>
                    <span className="stats">Players: 1</span>
                </header>
            );
        }

        ReactDOM.render(
            header,
            document.getElementById('root')
        )

    ```