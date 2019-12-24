# Lesson 05 - Use Keys to Keep Track of Elements

- **key** is a unique identifier that gives React a way to quickly and reliably identify element in a list

- The following

    ```
    const players = [
        {
            'name': 'Guil',
            'score': 50
        },
        {
            'name': 'Treasure',
            'score': 85
        },
        {
            'name': 'Ashley',
            'score': 40
        }
    ];
    ```

    ```
    const App = (props) => {
        return (
            <div className="scoreBoard">
                <Header
                    title="scoreboard"
                    totalPlayers={props.initialPlayers.length}
                />

                {/*Players List*/}
                {/*Fow now the components are static*/}
                {props.initialPlayers.map(player =>
                    <Player name={player.name} score={player.score}/>

                )}
            </div>
        );
    }

    ```

    raises error

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71420135-60a20680-2628-11ea-918b-7a92fa7704c9.png">
    </div>


- To resolve error, unique key must be created and passed to key props as a string

    ```
    const players = [
        {
            'name': 'Guil',
            'score': 50,
            'id': 1 // <-- Note the unique key for each item
        },
        {
            'name': 'Treasure',
            'score': 85,
            'id': 2
        },
        {
            'name': 'Ashley',
            'score': 40,
            'id': 3
        }
    ];
    ```

    ```
    const App = (props) => {
        return (
            <div className="scoreBoard">
                <Header
                    title="scoreboard"
                    totalPlayers={props.initialPlayers.length}
                />

                {/*Players List*/}
                {/*Fow now the components are static*/}
                {props.initialPlayers.map(player =>
                    <Player
                        name={player.name}
                        score={player.score}
                        key={player.key.toString()} // <-- Note key props here
                    />

                )}
            </div>
        );
    }
    ```
