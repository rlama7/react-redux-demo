# React Redux Example

Getting starte guide reference > https://react-redux.js.org/introduction/getting-started

## Installation

```
1. npx create-react-app my-app --template redux
2. npm install redux
3. npm install react-redux
```

## Provider

React Redux includes a <Provider /> component, which makes the Redux store available to
the rest of your app:

```
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDom.render(
    <Provider>
        <App />
    </Provider>,
    rootElement
)
```

## Hooks

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store

useSelector reads a value from the store and subscribes to updates, while useDispatch returns the store's
dispatch method to let you dispatch actions.

```
import React, {usestate} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from './counerSlice'
import styles from './Coutner.module.css'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2)

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={()=>dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={()=> dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    )
}
```
