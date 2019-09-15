import {
    createStore,
    applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import manyReducers from './reducers'
export default createStore(manyReducers,applyMiddleware(thunk))