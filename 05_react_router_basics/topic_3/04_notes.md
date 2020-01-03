# Lesson 04 - Navigating Routes Programmatically


- `this.props.history.push(<VAR_NAME>)` navigates to value stored in `<VAR_NAME>`

    Example

    ```
    class Home extends Component {
        handleSubmit = (e) => {
            e.preventDefault(); // this
            let teacherName = this.name.value;
            let teacherTopic = this.topic.value;
            let path = `teachers/${teacherTopic}/${teacherName}`;
            this.props.history(push);
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" ref={ (input) => this.name = input }/>
                    <input type="text" placeholder="Topic" ref={ (input) => this.topic = input }/>
                    <button type="submit">Go!</button>
                </form>
            );
        }

    }
    ```