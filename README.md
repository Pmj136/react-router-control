react-router-control
=========================
A component to simplify the usage of [react-router-dom](https://reactrouter.com/web/guides/quick-start), like the config
of [vue-router](https://router.vuejs.org/)

## Installation

To use [react-router-control](https://github.com/Pmj136/react-router-control.git) with your React app, install it as a
dependency:

```bash
# If you use npm:
npm install react-router-control

# Or if you use Yarn:
yarn add react-router-control
```

## Quick Start

- At first , we recommend that you use separate files to manage your config. If you are an experience
  with [vue-router](https://router.vuejs.org/) , the config is basically the same as it. Or you can refer
  to [routes.js](https://github.com/Pmj136/react-router-control/blob/main/examples/use_in_js/routes.js).

- Now , import your config (routes.js) at main.js:

```javascript
//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import RouterControl from "react-router-control";

import routes from "xxx/routes" //your config

ReactDOM.render(
    <RouterControl routes={routes}/>,
    document.getElementById('root')
);
```
- If you want to Use in <font color="#dd0000">**TypeScript**</font> , refer to [use in TypeScript](https://github.com/Pmj136/react-router-control/tree/main/examples/use_in_ts)

## Reference

### 1、props

|  prop  | desc  |
|  ----  | ----  |
| mode  | "browser" or "hash" ,default:"browser" |
| routes  | routes config |

### 2、render route children

- a part of route config

```javascript
[
    {
        path: "/parent",
        component: Parent,
        children: [
            {
                path: "child1",
                component: Child1
            }
        ]
    }
]
```

- Parent.jsx

```javascript
const Parent = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}
```

### 3、get dynamic segment in component

- a part of route config

```javascript
[
    {
        path: "/dynamic/:type",//dynamic segment 'type'
        component: Dynamic
    }
]
```

- Dynamic.jsx

```javascript
// in class component
import React, {Component} from "react"

class Dynamic extends Component {
    constructor(props) {
        super(props)
        //use props
        const {type} = props.match.params
        console.log(type)
    }

    render() {
        return (
            <div>test</div>
        )
    }
}
```

```javascript
// in function component
import {useParams} from "react-router-dom"

const Dynamic = (props) => {
    // use hooks
    const {type} = useParams();
    console.log(type)

    return (
        <>
            {props.children}
        </>
    )
}
```
 


