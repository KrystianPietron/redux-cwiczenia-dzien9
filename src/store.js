import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import reducers here
import addReduxDuck from './state'
const reducer = combineReducers({
    addReduxDuck
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)