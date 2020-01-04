# Lesson 01 - Create a Production Build

- `npm run build` generates `build` folder with static files that can be used in production web server
    - minifies all files for performance boost

- tool `serve` can be used to make a final look at the application before serving

    - to install, type

        ```
        npm install -g serve
        ```

    - to run the application, type

        ```
        serve -s build
        ```

    - to see the application, type

        ```
        localhost:5000
        ```
        in web browser