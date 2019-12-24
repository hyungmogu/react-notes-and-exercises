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




Full Example

```


```