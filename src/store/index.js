import {createStore, combineReducers, compose, applyMiddleware} from "redux"
// import loginAuthReducer from "../reducers/loginAuthReducer"
import newsfeedReducer from '../reducers/newsfeedReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
//    userToken: undefined,

    newsfeed: {
        news: [],
        comment: {}
    }

}

const combinedReducers = combineReducers({
    // loginAuth: loginAuthReducer,
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