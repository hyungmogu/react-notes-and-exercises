# Lesson 01 - Fetching Data with the Fetch API

- `fetch` and `then` is used to fetch data from `GET` endpoint
    - works like `promise` in javascript
        - `fetch` is used to make a request to endpoint
        - `then` is used to synthesize data if retrieval successful
        - `catch` is used when error results (i.e status code 404, or 500)
    - is asynchronous

    Example
    ```
    import React, { Component } from 'react';
    import './App.css';
    import SearchForm from './Components/SearchForm';
    import GifList from './Components/GifList';

    export default class App extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        };
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=...')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ gifs: responseData.data });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }

    render() {
        console.log(this.state.gifs);
        return (
        <div>
            <div className="main-header">
            <div className="inner">
                <h1 className="main-title">GifSearch</h1>
                <SearchForm />
            </div>
            </div>
            <div className="main-content">
            <GifList />
            </div>
        </div>
        );
    }
    }
    ```