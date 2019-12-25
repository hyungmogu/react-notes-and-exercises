# Lesson 07 - Quiz

1. What type of components allow you to initialize state?

- A) [ ]: Functional components
- B) [ ]: Object components
- C) [ ]: Pure components
- D) [ ]: Class components

    **Answer:"" D

2. The only required method in a class component is:


    - A) [ ]: componentDidMount()
    - B) [ ]: onClick()
    - C) [ ]: render()
    - D) [ ]: return()

    **Answer:** C


3. Complete the code to define a class component named Modal.


    ```
    class Modal extends ______ {
    ...
    }

    ```

    **Answer:** React.Component


4. Can you define any stateless functional component as a class?

    - A) [ ]: Yes
    - B) [ ]: No

    **Answer:** A

5. Complete the code to define a time state with an initial value of 0. Note that the state object is not inside a constructor().

    ```

    class Timer extends React.Component {
        1._______ = {
        2.____  : 3._____
        };
        render() { ... }
    }

    ```

    **Answer:** 1. state 2. time 3. 0



6. In the function below, update an isRunning state to true.

    ```
    startTimer = () => {
    this.1._____({ 2._____ : 3.______ });
    }
    ```

    **Answer:** 1.setState 2.isRunning 3.true

7. Add the code that will call a function named startTimer when the button is clicked.

    ```
    <button 1.____ = {2._____}>Start</button>
    ```

    **Answer:** 1. onClick, 2. this.startTimer