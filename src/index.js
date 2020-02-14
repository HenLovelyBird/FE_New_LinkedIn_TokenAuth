import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Navigation from './Pages/Global/Navigation/NavigationIndex'
// import Login from './App';
import Profile from './Pages/Profile/ProfileIndex'
import Newsfeed from './Pages/Newsfeed/NewsfeedIndex'
import Chat from './Pages/Chat/ChatIndex'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store'
import { Provider } from 'react-redux'
import RegistrationComponent from './Pages/Login/Components/RegistrationComponent';
import LoginIndex from './Pages/Login/LoginIndex';


  ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact ><LoginIndex /></Route>
                {/* <PrivateRoute isAuthenticated={this.props.userToken} path="/profile" component={MyProfile} /> */}
                <Route path="/signin"> <LoginIndex /></Route>
                <Route path="/registration" component={RegistrationComponent} />
                <Route path="/profile" > <Profile /></Route>
                <Route path="/posts/:id" component={Newsfeed} />
                <Route path="/im" component={Chat} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
