# Lesson 05 - Prevent Memory Leaks with componentWillUnmount()

- if left alone, if timer component is removed, the code will keep running
    - this is called **Memory Leak**

<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71531079-e4b2f300-28a1-11ea-9eb4-f32b758ed6e8.png">
</div>


- To prevent the above condition, the following code is done under the lifecycle `componentWillUnmount`

    ```
    import React, { Component } from 'react';

    class Stopwatch extends Component {

        ...

        componentDidMount() {
            console.log('The stopwatch mounted');
            this.intervalId = setInterval( () => { this.tick() , 100 }) // this means to run tick() every 100 milliseconds
        }

        tick = () => {
            console.log('Ticking...');
            if (this.state.isRunning) {
                let now = Date.now();

                this.setState(prevState => {
                    previousTime: now,
                    elapsedTime: this.state.elapsedTime + (now - this.state.previousTime) // this is to ensure that elapsed time is in interval of 100 ms exact
                });
            }
        }

        componentWillUnmount() {
            cleanInterval(this.intervalId);
        }
    }
    ```

    Here,

    - componentWillUnmount() -> is method called when component is about to be removed from view

    - cleanInterval(VAR_NAME) -> is method called to prevent `setInterval` from memory leaking Var Name
