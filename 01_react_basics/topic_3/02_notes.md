# Lesson 2 Notes - Components and Props


1. props are **immutable**

    ```
    const Header = (props) => {
    return (
        <header>
        <h1>{ props.title = 'Fun Board' }</h1>
        </header>
    );
    }
    ```

    this will throw error

    ```
    Cannot assign to read only property 'title' of object.
    ```


2. Props are also written in the following for better readability

    ```
    <Header
    title="My Scoreboard"
    totalPlayers={5}
    isFun={true}
    />
    ```

3. Prop can be left without value if always {true}

    ```
    <Header
    title="My Scoreboard"
    totalPlayers={5}
    isFun
    />
    ```

3. Props are suggested to be written in double quotes ("")

    ```
    <Player
    name="Guil H"
    team="Treehouse"
    />
    ```
