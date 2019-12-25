# Lesson 11 - Quiz

1. Complete the code to display the value of a prop named time. Note that Clock is a class component.

    ```
    class Clock extends React.Component {
    render() {
        return (
        <span className="time">1.________</span>
        );
    }
    }
    ```

    **Answer:** this.props.time


2. In React, state is never modified directly.
    - A) [ ]: False. State is a regular JavaScript object, so you can change its properties using dot notation.

    - B) [ ]: True. The only way React allows you to update state is by using its built-in setState() method.

    **Answer:** B


3. Data from state is distributed through the application via ___.

    - A) [ ]: props
    - B) [ ]: functions
    - C) [ ]: setState()
    - D) [ ]: events

    **Answer:** A


4. State may be updated asynchronously. Whenever you need to update state based on previous state, you shouldn't rely on _____ to calculate the next state.

    - A) .bind()
    - B) state = { };
    - C) onClick={}
    - D) this.state

    **Answer:** D

5. Complete the code so that the isConfirmed state updates its value based on the previous state.

    ```
        confirmGuest = () => {
        this.setState( prevState => ({
            isConfirmed: !1.________.isConfirmed
        }));
        }
    ```
    **Answer:** prevState

6. What type of state is available to the entire app?
    - A) [ ]: prevState
    - B) [ ]: setState
    - C) [ ]: Application state
    - D) [ ]: Component state

    **Answer:** C
