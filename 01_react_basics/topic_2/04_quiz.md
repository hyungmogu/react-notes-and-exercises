# Lesson 04 - Quiz

1. A ________ renders a reusable piece of the UI.

    - A) [ ]: module
    - B) [ ]: component
    - C) [ ]: JSX tag
    - D) [ ]: JSX expression

    **Answer:** B

2. How do you create a React component?

    - A) [ ]: As either a JavaScript function or class
    - B) [ ]: With a JSX expression
    - C) [ ]: As a JavaScript class only
    - D) [ ]: As a JavaScript function only

    **Answer:** A

3. Define a component that creates a reusable 'footer'.

    ```
    function () ______ {
    return (
        <footer>
        <h2>The Footer</h2>
        <span>This is the awesome footer!</span>
        </footer>
    );
    }
    ```

    **Answer:** Footer

4. Use a JSX tag to render a component named Scoreboard into the DOM.

    ```
    ReactDOM.render(
    _______,
    document.getElementById('root')
    );

    ```

    **Answer:** <Scoreboard/>


5. React uses a templating language for creating components.

    - A) [ ]: True. You must download and install the JSX templating language before creating a - component.
    - B) [ ]: False. React components are written in plain JavaScript, with the help of JSX.

    **Answer:** B