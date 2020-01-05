# Lesson 01 - Installing Create React Native App


- install by typing `npm install -g create-react-native-app`
- create react native app by typing `create-react-native-app <APP_NAME>`
- installation provides the following options
    1. `npm start`
        - creates development server so it can be viewed on physical app, or ios or android emulator

        **Note:** this requires the installation of **Expo** application on android/ios device

        <div style="text-align: center;">
            <img src="https://user-images.githubusercontent.com/6856382/71785218-3e11d500-2fba-11ea-98d9-a1e2a210721c.png">
        </div>

    2. `npm run ios`
        - starts running ios emulator (required XCode)
    3. `npm run android`
        - starts running android emulator (requires Android build tools)
    4. `npm test`
        - starts running the test runner
    5. `npm run eject`
        - removes current configuration and to allow custom setup on build dependencies