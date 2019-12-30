# Lesson 07 - The React Challenge Solution

Icon.js
```
import React from 'react';

const Icon = (props) => {
  <svg>...</svg>
};

export default Icon;
```

App.js
```
// App.js
render() {
  const highScore = this.getHighScore();

  return (
    <div className="scoreboard">
      <Header players={this.state.players} />

      {/* Players list */}
      {this.state.players.map( (player, index) =>
        <Player
          name={player.name}
          score={player.score}
          ... // omitted props for brevity
          isHighScore={highScore === player.score}  // is a player's 'score' prop equal to the high score?
        />
      )}
      ...
    </div>
  );
}
```


Player.js

Add the following line
```
import React, { Component } from 'react';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string,
        score: PropTypes.number,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighestScore: PropTypes.bool
    };

    render() {
        const {
            const {
                name,
                id,
                score,
                index,
                removePlayer,
                changeScore
            } = this.props;
        }

        return (
            <div className="player">
                <span className="player-name">
                    // Note here that removePlayer is accessed via props
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    <Icon isHighScore={this.props.isHighScore} />
                    {this.props.name}
                </span>

                // note that score is passed down from Player to counter
                <Counter score={this.props.score} changeScore={this.props.changes}/>
            </div>
        );
    }
}

export default Player;
```

Icon.js
```
const Icon = (props) =>
  <svg ... className={ props.isHighScore ? 'is-high-score' : null }>
    <path ... />
    <rect ... />
  </svg>;

Icon.propTypes = {
  isHighScore: PropTypes.bool
};
```