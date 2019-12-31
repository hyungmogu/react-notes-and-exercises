# Lesson 04 - Next Steps with Create React App

## Jest

- is a testing framework developed by Facebook

Example
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
})
```

## Running Jest
- `npm test` launches react into test mode


## npm run reject?
- this is required only when dependency demands the change in build tool chain