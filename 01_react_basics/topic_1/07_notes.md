# Lesson 7 Notes - Embed JavaScript Expressions in JSX

- JSX makes templating syntax more dynamic

- { VAR_NAME } is called JSX expression, and is used to insert texts within

```
const title = "hello world";
const desc = "this is a cool desc";

const header = (
    <header>
        <h1>{ title }</h1>
        <p>{ desc }</p>
    </header>
)

ReactDOM.render(
    header,
    document.getElementById('root')
)
```

- `className` is used as an attribute of `class` in html tags
    - `class` is a reserved word in javascript

```
<p className="hello-world">His world</p>
```