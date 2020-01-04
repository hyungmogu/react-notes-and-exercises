# Lesson 05 - Displaying the Search Results

- empty search can be avoided by providing default parametric value

    Example
    ```
    performSearch(query = 'cats')
    ```

- empty search can be avoided by performing search when component mounted

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71769175-d33d9c80-2eda-11ea-9ac4-9f8a8b7c1526.png">
    </div>

    Example

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

    componentDidMount() {
        this.performSearch();
    }

    performSearch(query = 'cats') {
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

- `No Gif Found` component can be added by using if and else statement
    - if list of gifs exist, then return `<GifList/>`
    - else, return `<NoGif/>`

    Components/GifList.js
    ```
    import React from 'react';
    import Gif from './Gif';
    import NoGif from './NoGif';

    const GifList = props => {
        const results = props.data;
        let gifs;

        if (!Array.isArray(results) || results.length == 0) {
            gifs = <NoGifs/>
        } else {
            gifs = results.map(gif =>
                <Gif url={gif.images.fixed_height.url}/>
            );
        }

        return (
            <ul className="gif-list">
                { gifs }
            </ul>
        );
    }

    export default GifList;
    ```

- `No Gif Found` appears when re-performing search.
    - ternary operator is `if and else` statement replicated by using `?` and `:` symbols
    - this can be avoided by adding `isLoading` state value, and ternary operator to show the component only when loading is false

    Example

    App.js
    ```
    ...

    export default class App extends Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch(query = 'cats') {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`) // fetch is replaced with axios.get
            .then(response => {
                this.setState({
                    gifs: response.data.data,
                    isLoading: false
                });
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
            {
                this.state.isLoading // ternary operator!! Yay!!
                ? <p>Loading...</p>
                : <GifList data={this.state.gifs}/>
            }
            </div>
        </div>
        );
    }}

    export default App;
    ```