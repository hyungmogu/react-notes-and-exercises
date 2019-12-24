# Lesson 2 Notes - Create a Component

- created by wrapping React DOM objects in a function

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