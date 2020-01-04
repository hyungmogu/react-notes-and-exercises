# Lesson 02 - Deploy to Github Page

- to deploy to github
    - first add `"homepage" : "http://<GITHUB_USERNAME>.github.io/<REPO_NAME>"` to package.json

    Example

    ```
    {
    "name": "course-directory",
    "version": "0.1.0",
    "private": true,
    "homepage": "http://moe.github.io/i_love_you♥",
    "devDependencies": {
        "react-scripts": "1.0.6"
    },
    "dependencies": {
        "package.json": "^2.0.1",
        "react": "^15.5.4",
        "react-dom": "^15.5.4",
        "react-router-dom": "^5.1.2"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    }}
    ```

    - second, run `np install --save gh-pages`
        - this lets to save on branch `gh-pages`
        - [UPDATE, 2019] this is not necessary. Master branch can also be used by configuring in `setting` under repo

        <div style="text-align: center;">
            <img src="https://user-images.githubusercontent.com/6856382/71771685-88348100-2efc-11ea-978f-36ccf26207a1.png">
        </div>

- running `npm run build` also shows the how of deploying files to github

    ```
    The project was built assuming it is hosted at the server root.
    To override this, specify the homepage in your package.json.
    For example, add this to build it for GitHub Pages:

    "homepage" : "http://myname.github.io/myapp",

    The build folder is ready to be deployed.
    You may serve it with a static server:

    npm install -g serve
    serve -s build

    ```

## Github page and 404 not found
- caused by url not starting at root
- can be circumvented by adding basename to `BrowserRouter`

    ```
    <BrowserRouter basename="/course-directory">
    ```

- if `React Router` is being used and app has multiple pages, circumvent by using `<HashRouter>` instead of `<BrowserRouter>`