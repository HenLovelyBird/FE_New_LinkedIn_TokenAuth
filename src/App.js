import React from 'react';
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './App.css';
import Loginpage from './Pages/Login/LoginIndex.jsx'
// import Profile from './Pages/Profile/ProfileIndex'
// import Registrationomponent from "./Pages/Registration/RegistrationIndex"
// import PrivateRoute from "./PrivateRoute"
import { connect } from "react-redux"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setUserToken: base64 => dispatch({
        type: "SET_USERBASE64",
        payload: base64
    })
})


function App() {
  return (
    <Container>
      <h1> Welcome! Ready to login or register!</h1>
      <Loginpage />
    </Container>
  );
}          

export default connect(mapStateToProps, mapDispatchToProps)(App)
