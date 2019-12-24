# Lesson 6 Notes - Understanding JSX

- to use javascript, needs to be embedded
- embedding can be done by injecting script tag containing babel and adding type='text/babel' to app.js file
    ```
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel" src="./app.js"></script>
    ```

- Babel is huge (~1MB), and it's not ideal for production environment