# Lesson 06 - Returning null from setState

- `null` can be passed to stop triggering the re-rendering of view
    - useful when creating loading page and clicking the same page twice

    Example

    App.js
    ```
    class App extends Component {
        state = {
            teacher: ''
        };

        updateTeacher = teacher => {
            const newTeacher = teacher;
            this.setState(state => {
                if (state.teacher === newTeacher) {
                    return null;
                }

                return { teacher };
            })
        }

        render() {
            return (
                <div className="App">
                    <header>
                        <h1>Meet the teachers</h1>
                        {teachers.map((teacher, i) => {
                            <button
                                key={teacher}
                                type="button"
                                value={teacher}
                                onClick={e => this.updateTeacher(e.target.value)}
                            >{teacher}</button>
                        })}
                    </header>

                    <Teacher teacher={this.state.teacher}/>
                </div>
            );
        }
    }

    export default App;
    ```