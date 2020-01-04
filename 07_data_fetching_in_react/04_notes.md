# Lesson 04 - Building a Search Feature

- this lesson goes over the how of creating search feature
    - first, add a method that performs search, and re-render page when called
        - method is called `performSearch`
    - second, when form is submitted, pass input value to `performSearch` via prop `onSearch`
        - include `e.preventDefault()` to stop triggering the normal `<form>` submit behavior
        - include `e.currentTarget.reset()` to reset the form field

    App.js
    ```
    ...

    export default class App extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        };
    }

    performSearch(query) {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`) // fetch is replaced with axios.get
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
                <SearchForm onSearch={this.performSearch}/>
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

    Components/SearchForm.js
    ```
    import React, { Component } from 'react';

    export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
        <form className="search-form" onSubmit={this.handleSubmit} >
            <label className="is-hidden" htmlFor="search">Search</label>
            <input type="search"
                onChange={this.onSearchChange}
                name="search"
                placeholder="Search..." />
            <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
        );
    }
    }

    ```