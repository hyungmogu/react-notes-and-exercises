# Lesson 1 Notes - Setting and Using Props


- **Props** is a list of properties used to pass data to a component

```

const App = () => {
    return (
        <Header title="Scoreboard" totalPlayers={1} /> // Here we are passing value 1

        <Player />
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
```

- Props is accessible in a component as a parameter 'prop' in a function

```
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Player: {prop.totalPlayers}</span>
        </header>
    );
}

```


- A function can be passed in prop

```

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Player: {prop.totalPlayer(5))}</span>
        </header>
    );
}

const App = () => {
    return (
        <Header title="Scoreboard" totalPlayers={ n => n + 10 } /> // Here we are passing value 1

        <Player />
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
```