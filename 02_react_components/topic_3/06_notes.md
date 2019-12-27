# Lesson 06 - Quiz


1. Complete the code to add the method that will clear the interval ID once the component gets removed from the DOM.

    ```
    1._________ () {
    clearInterval(this.myIntervalID);
    }
    ```

    **Answer:** componentWillUnmount


2. Which lifecycle method gets called by React as soon as a component is inserted into the DOM?

    - A) [ ]: componentRender()
    - B) [ ]: componentWillUnmount()
    - C) [ ]: componentDidMount()
    - D) [ ]: componentMounted()

    **Answer:** C

3. Which lifecycle method do you use to fetch data from an API?

    - A) [ ]: componentWillFetch()
    - B) [ ]: componentShouldUpdate()
    - C) [ ]: componentWillUnmount()
    - D) [ ]: componentDidMount()

    **Answer:** D


4. Complete the ternary expression to display the button text based on the value of the isLoggedIn state.

    ```
    class Login extends Component {
        state = { isLoggedIn: false };
        ...
        render() {
            return (
            <button>
                { this.state.isLoggedIn 1.______  'Log out' 2.______  'Log in' }
            </button>
            );
        }
    }
    ```

    **Answer:** ?, :


5. In the render() method, where should you write any intermediary variables?

    - A) [ ]: In componentDidMount()
    - B) [ ]: Outside the return statement
    - C) [ ]: In componentWillUnmount()
    - D) [ ]: Inside the return statement

    **Answer:** B

6. Which lifecycle method is invoked just before a component instance is destroyed?

    - A) [ ]: componentWillUnmount()
    - B) [ ]: clearInterval()
    - C) [ ]: componentDidMount()
    - D) [ ]: render()

    **Answer:** A

