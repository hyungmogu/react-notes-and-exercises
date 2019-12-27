# Lesson 01 - Optimize Performance with PureComponent


- `Component` renders all components regardless of its change in stage or props

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71532921-a8d05b80-28aa-11ea-80a3-4ab00501b1d6.png">
    </div>

- `PureComponent` prevents unnecessary re-renders
    - it renders only parts where its props/state has changed
    - it's a way of optimizing component

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71532951-df0ddb00-28aa-11ea-8523-268f1eb07277.png">
    </div>


    Player.js
    ```
        class Player extends PureComponent {
            render() {
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
    ```