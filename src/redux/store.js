import {createStore, combineReducers, compose} from 'redux'
import {linkReducer} from "./reducers"

const rootReducer = combineReducers({
    linkStore: linkReducer,
})


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


export const store = createStore(rootReducer, composeEnhancers())