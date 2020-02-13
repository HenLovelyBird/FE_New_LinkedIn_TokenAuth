import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import loginAuthReducer from "../reducers/loginReducer"
import newsfeedReducer from '../reducers/newsfeedReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
//    userToken: undefined,
    loginAuth: {},
    newsfeed: {
        news: [],
        comment: {}
    }

}

const combinedReducers = combineReducers({
    loginAuth: loginAuthReducer,
    // userToken: loginAuthReducer,
    newsfeed: newsfeedReducer
})

 const configureStore=()=>{
    return createStore(
        combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
)}

export default configureStore