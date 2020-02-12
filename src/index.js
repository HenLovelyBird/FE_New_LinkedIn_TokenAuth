import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Navigation from './Pages/Global/Navigation/Navigation'
import Login from './App';
import Profile from './Pages/Profile'
import Newsfeed from './Pages/Newsfeed'
import Chat from './Pages/Chat'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
<Provider store={configureStore()}>
    <Router>
            <Navigation />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/posts/:id" component={Newsfeed} />
            <Route path="/im" component={Chat} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
