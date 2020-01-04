# Lesson 03 - Displaying the Data

- this lesson goes over displaying list of gifs to page using axios library
    - is an extension of previous note

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
            <GifList data={this.state.gifs}/>
            </div>
        </div>
        );
    }}

    export default App;
    ```


    GifList.js
    ```
    import React from 'react';
    import Gif from './Gif';

    const GifList = props => {
        const results = props.data;
        let gifs = results.map(gif =>
            <Gif url={gif.images.fixed_height.url}/>
        );

        return (
            <ul className="gif-list">
                <Gif />
            </ul>
        );
    }

    export default GifList;
    ```


    Gif.js
    ```
    import React from 'react';

    const Gif = props => (
        <li className="gif-wrap">
            <img src={props.url} alt="">
        </li>
    );

    ```