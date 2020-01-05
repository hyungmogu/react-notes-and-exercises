# Lesson 03 - Deploy to Now


- `Now` allows to deploy react application with minimal configuration
- to deploy to now,
    - first install now via command `npm install -g now`
    - second create `now.json` in react project root folder (where package.json) is containing following lines of code

        now.json
        ```
        {
            "version": <VERSION_NUMBER>,
            "name": <APP_NAME>,
            "builds": [
                { "src": "package.json", "use": "@now/static-build" }
            ],
            "routes": [
                {"src": "^/static/(.*)", "dest": "/static/$1"},
                {"src": "^/favicon.ico", "dest": "/favicon.ico"},
                {"src": "^/asset-manifest.json", "dest": "/asset-manifest.json"},
                {"src": "^/manifest.json", "dest": "/manifest.json"},
                {"src": "^/service-worker.js", "headers": {"cache-control": "s-maxage=0"}, "dest": "/service-worker.js"},
                {"src": "^/precache-manifest.(.*)", "dest": "/precache-manifest.$1"},
                {"src": "^/(.*)", "dest": "/index.html"}
            ]
        }
        ```

    - second, add the following lines of code to `package.json`

        package.json
        ```
        "scripts": {
            ...
            "now-build": "react-scripts build && mv build dist"
        }
        ```

    - third, execute command `npm run now-build`
    - fourth, deploy by executing command `now`
