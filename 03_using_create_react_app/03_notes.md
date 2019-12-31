# Lesson 03 - Customizing Your Project

## React Bootstrap
- integrates Twitter's Bootstrap framework into React
- installed by typing `npm install --save react-bootstrap bootstrap`


App.js
```
import React, {Component} from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h1>Search App</h1>
                        <p>This is a simple search</p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}
```

