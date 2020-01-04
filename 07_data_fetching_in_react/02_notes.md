# Lesson 02 - Fetching Data with Axios

- Axios is a promise based library that's similar to `fetch` API
    - works similar to `fetch` API
    - has stronger browser support
    - consists of more elaborate functionalities

    Example

    App.js
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
        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=...') // fetch is replaced with axios.get
            .then(response => {
                this.setState({ gifs: response.data.data });
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
    }}

    export default App;
    ```