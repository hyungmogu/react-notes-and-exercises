# Lesson 03 - Use Props to Create Reusable Components

- Props can be passed from a component to another

- Lets say we first pass value in app under prop name of 'score', and say we want to show score in the picture like below

<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71418731-e02bd780-2620-11ea-90f5-3e0c1b01bd89.png">
</div>

-------------

- First we pass value in App

```
const App = () => {
    return (
        <div className="scoreBoard">
            <Header
                title="scoreboard"
                totalPlayers={1}
            />

            {/*Players List*/}
            {/*Fow now the components are static*/}
            <Player name="Guil" score={50}>
            <Player name="May" score={20}>
        </div>
    );
}
```

- Second, pass score from App to Player

```
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score} />
        </div>
    );
}
```

- Third, pass score from Player to Counter to show score on display

```
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    );
}
```