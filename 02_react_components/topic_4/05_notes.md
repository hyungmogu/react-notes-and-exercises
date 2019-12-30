# Lesson 05 - Static PropTypes and Default Props

- propTypes is used to keep documentation for components

## isRequired to keep inputs required
- `propTypes.<PROPTYPE_TYPE>.isRequired` throws error if variable is left empty


    ```
    import React, { Component } from 'react';
    import Counter from './Counter';

    class Player extends PureComponent {

        static propTypes = {
            changeScore: PropTypes.func,
            removePlayer: PropTypes.func,
            name: PropTypes.string,
            score: PropTypes.number,
            id: PropTypes.number,
            index: PropTypes.number
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

## Default Props to add default values to props
- `propTypes.<PROPTYPE_TYPE>.default` is used to add default values to variables


    Header.js
    ```
    const Header = (props) => {
        return (
            <header>
                <Stats players={props.players}>
                <h1>{ props.title }</h1>
                <Stopwatch />
            </header>
        );
    }

    Header.propTypes = {
        title: PropTypes.string,
        players: PropTypes.arrayOf(PropTypes.object)
    }

    Header.defaultProps = {
        title: 'Scoreboard'
    }
    ```

