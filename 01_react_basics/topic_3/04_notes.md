# Lesson 04 - Iterating and Rendering with map()


- **map()** is used to iterate over data and render elements in react

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

- **First**, pass list to a prop in `ReactDOM.render()`

```
...

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
)

```

- **Second**, iterate over data and create elements using **map()** method


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
