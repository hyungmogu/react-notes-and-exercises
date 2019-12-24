# Lesson 05 - Components as Arrow Functions

- is an alternative way of defining a function / component

Before
```
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)
```

After (equivalent)
```
const Header() => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    )
};

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)
```
