# Lesson 6 Notes - Understanding JSX

- to use javascript, needs to be embedded
- embedding can be done by injecting script tag containing babel and adding type='text/babel' to app.js file

    ```
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel" src="./app.js"></script>
    ```

    Example

    ```
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Title</title>
            <link rel="stylesheet" href="./app.css" />
        </head>

        <body>
            <div id="root"></div>

            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script> <!--This is react CDN-->
            <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> <!--This is react CDN-->
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> <!--This is babel CDN-->
            <script type="text/babel" src="./app.js"></script>
        </body>
        </html>
    ```

- Babel is huge (~1MB), and it's not ideal for production environment