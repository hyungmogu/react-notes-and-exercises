# Lesson 07 - Composing Components

- component(s) can be housed/nested in another
```
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
            Guil
            </span>

            <Counter/>
        </div>
    );
}

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

- at the end, multiple components are put together inside `<App/>` component and placed in render

```
const App = () => {
    return (
        <div className="scoreboard">
            <Header/>
            <Player/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

```