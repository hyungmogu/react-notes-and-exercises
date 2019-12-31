# Lesson 01 - What is the Context API?

## Prop Drilling
- is a condition that occurs when passing a data from a component to its child several layers deep

    ```
    <Main prop1={prop}>
        <Parent prop2={prop1}>
            <Child prop3={prop2}>
                <GrandChild1 />
                <GrandChild2 />
                <GrandChild3 />
            </Child>
        </Parent>
    </Main>
    ```


## React Context API
- is developed by Facebook, and released starting React version 16
- allows to pass information to its child without having to pass data manually at  every single level without tools like Redux