# Lesson 08 - Quiz


1. Which keyword lets you call propTypes from inside a class?
    - A) [ ]: extends
    - B) [ ]: static
    - C) [ ]: from
    - D) [ ]: isRequired

    **Answer:** C

2. Which of the following can produce a performance boost in some cases?

    - A) [ ]: Arrow functions
    - B) [ ]: setInterval()
    - C) [ ]: PureComponent
    - D) [ ]: Component

    **Answer:** C

3. Complete the code to create a ref that will access the `<input>` element.

```
class SignupForm extends Component {
  userInput = 1._________;
  render() {
    return (
      <input
        type="text"
        placeholder="Enter your info"
        2._______ ={ this. 3.________ }
      />
    );
  }
}
```

**Answer:** React.createRef(), ref, userInput


4. Complete the code to provide the Greeter component a default value for the greeting prop.

```
Greeter. 1.______ = {
  greeting: 'To infinity…and beyond!'
};
```

**Answer:** defaultProps


5. Destructure the props passed to Book and display their values in the JSX.

```
const Shelf = () => {
  return <Book title="TL;DR" author="Jay McQuery" year={2013} />;
}
// Book component
const Book = ({ 1._____ , 2._____ , 3._____  }) => {
  return (
    <div>
      <h1>Title: { 4.________ }</h1>
      <p>Author: { 5.________ }</p>
      <p>Published: { 6.________ }</p>
    </div>
  );
}
```
**Answer:** title, author, year, title, author, year

6. Write the property that will allow type checking on the props passed to the Book component.

```
const Book = (props) => {
  return ( ... );
}

Book. 1.________ = {
 ...
};
```

**Answer:** propTypes