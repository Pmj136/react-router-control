react-router-control
=========================
A component to simplify the configuration of react-router-dom, like the configuration
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

## Usages

### 1、routes config

If you are an experience with [Vue.js](https://vuejs.org/) , the configuration is basically the same as it. Or you can
refer to the following configuration.

```javascript
//examples
const routes = [
    {
        path: "/home",
        component: () => <div>home</div>,
    },
    {
        path: "/about/:type",//dynamic segment 'type'
        component: () => <div>About</div>
    },
    {
        path: "/user",
        component: User,
        children: [
            //if matching "/user", router will jump to "/user/profile".
            {
                path: "", //or use absolute path "/user"
                redirect: "profile" //or use absolute path "/user/profile"
            },
            {
                path: "profile", //or use absolute path "/user/profile"
                component: Profile,
            },
            //and more……
        ]
    }
];
```

### 2、render routes

|  prop  | desc  |
|  ----  | ----  |
| mode  | "browse" or "hash" ,default:"browse" |
| routes  | routes config |

<br/>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import RouterControl from "react-router-control";

import routes from "routes.js" //导入路由配置

ReactDOM.render(
    <RouterControl routes={routes}/>,
    document.getElementById('root')
);
```

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

### 4、get dynamic segment in component

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

