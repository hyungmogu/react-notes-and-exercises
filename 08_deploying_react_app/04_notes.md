# Lesson 04 - Deploy to Netlify

- is draggable deployment service for static application like react
- to deploy react app to netlify,
    - first, run `npm run build` to create production version of react application
    - second, run `npm install netlify-cli -g` to install netlify
    - third, run `netlify deploy` to deploy application
    - fourth, authenticate on opened netlify website

        <div style="text-align: center;">
            <img src="https://user-images.githubusercontent.com/6856382/71773388-5c73c400-2f19-11ea-9904-ab9d329c4b87.png">
        </div>


    - fifth, back in cli, choose `create & configure a new site` using up/down keyboard
    - sixth, select team

        Example
        ```
        ? What would you like to do? +  Create & con
        figure a new site
        ? Team: (Use arrow keys)
        ❯ Hyungmo Gu's team
        ```

    - seventh, add `site name` and `account`

        Example

        ```
        ? Team: Hyungmo Gu's team
        Choose a unique site name (e.g. hyungmogu-makes-great-sites.netlify.com) or leave it blank for a random name. You can update the site name later.
        ? Site name (optional): course-directory-5321
        ```

    - eighth, set path of folder containing production files from project root folder (i.e. build)
    - nineth, run `netlify deploy --prod`
