# Lesson 03 - Customizing Your Project

## React Bootstrap
- integrates Twitter's Bootstrap framework into React
- installed by typing `npm install --save react-bootstrap bootstrap`
- components and it's usage can be found here


## Example of Using React Bootstrap

App.js
```
import React, {Component} from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h1>Search App</h1>
                        <p>This is a simple search</p>
                        <SearchForm />
                    </Grid>
                </Jumbotron>

                <Results/>
            </div>
        );
    }
}
```

components/SearchForm.js
```
import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';


const SearchForm = () => {
    return (
        <Form inline>
            <FormGroup controlId="formInlineEmail">
                <FormControl type="search" placeholder="enter something..." />
            </FormGroup>
            {' '}
            <Button type="submit">
                search
            </Button>
        </Form>
    );
}

export default SearchForm;
```

components/Results.js
```
import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';


const Results = () => {
    return (
        <Container>
            <h2>Results List</h2>
            <ListGroup>
                <ListGroupItem href="#" active>Link 1</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
            </ListGroup>
        </Container>
    );
}

export default Results;
```


