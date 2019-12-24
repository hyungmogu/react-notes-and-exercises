# Lesson 06 - Create the Player

- this part is an extension of lesson 5
- can be safely skipped

```
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
            Guil
            </span>

            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">35</span>
                <button className="counter-action increment">+</button>
            </div>
        </div>
    );
}

ReactDOM.create(
    <Player/>,
    document.getElementById('root')
)
```