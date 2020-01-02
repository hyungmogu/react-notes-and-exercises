# Lesson 04 - Routing Challenge Solution

- I love you :)♥

```
import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><Link to='/courses/html'>HTML</Link></li>
        <li><Link to='/courses/css'>CSS</Link></li>
        <li><Link to='/courses/javascript'>JavaScript</Link></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route path="/courses/html" render={ () => <HTML/>}/>
    <Route path="/courses/css" render={() => <CSS/>}/>
    <Route path="/courses/javascript" render={() => <JavaScript/>}/>
  </div>
);

export default Courses;
```