# Lesson 09 - Quiz


1. Which of the following best describes unidirectional data flow?
    - A) [ ]:React flows data changes at the bottom level up through the component tree updating each component.
    - B) [ ]:Data flow that is read-only and cannot change over time
    - C) [ ]:React flows any data changes at the top down through the component tree updating each component.

    **Answer:** C


2. Can two or more components access and share the same state?
    - A) [ ]: No. Only child components can pass state up to its ancestor components.
    - B) [ ]: Yes. A parent component can pass state down to its children via props.

    **Answer:** B


3. When two or more components need access to the same state, we hoist the state into their common parent. This is called:

    - A) [ ]: lifting state
    - B) [ ]: event handling
    - C) [ ]: controlled component
    - D) [ ]: unidirectional data flow

    **Answer:** A

4. React allows us to use props that are callback functions to communicate data upstream, from a child to a parent.

    - A) [ ]: False. All data must flow from parent to child only.
    - B) [ ]: True. That's how a child component can access functions and change state defined in its parent component.

    **Answer:** B

5. Complete the code to create a controlled component that renders an `<input>` field.

    ```
    class ControlledInput extends Component {
    state = {
        value: ' '
    };
    handleChange(e) {
        this.setState({ value: 1.___________ });
    }
    render() {
        return (
        <input
            type="text"
            value={ 2.___________ }
            3.___________ ={ this.handleChange }
        />
        );
    }
    }
    ```

    **Answer:** e.target.value, this.state.value ,onChange


6. Complete the code to bring in all student objects in the previous state into the students array in setState().

    ```
    class Students extends Component {
    state = {
        students: [ // array of student objects ]
    };
    this.setState( prevState => ({
        students: [
        1._____________,
        { // new student object }
        ]
    }));
    render() { ... }
    }
    ```

    **Answer:** ...prevState.students


