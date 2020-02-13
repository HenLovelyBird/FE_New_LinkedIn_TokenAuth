import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../Login/style.css';
import { Link } from 'react-router-dom'
// import LoginTranslator from './Components/LoginTranslatorComponent';
import { useState } from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import RegistrationComponent from './Components/RegistrationComponent';
// import authCheckLogin from '../../APIs/Login/authCheckLogin' i have to be able to write it as cDM in here to import it

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setUserToken: base64 => dispatch({
    type:"SET_USERBASE64",
    payload: base64
  }) 
})

// const base64usernameAndPassword = btoa(username + ":" + password)
// const URL = "https://linkedinmockup.herokuapp.com/testauth"
// const headers = new Headers({
//     "Authorization": "Basic " + base64usernameAndPassword 
// })

function Loginpage(props) {

  const [ username, setUsername] = useState("")
  const [ password, setPassword] = useState("")
  const [ saveCredentials, setSaveCredentials] = useState(false)
  const [ error, setError] = useState(undefined)
  
  const login = async () => {  
    const res = await fetch("http://localhost:3500/users/signin", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: ({
        username,
        password
      })
    })
    if (res.ok){
        const resJson = await res.json();
        console.log(resJson)
        //props.setUserAuth(base64usernameAndPassword)
        if (saveCredentials)
          localStorage.setItem("access_token", resJson.access_token)
          
        props.setUserToken(resJson.access_token)
  
        props.history.push("/profile")
      }
      else{
        //console log
        setError("Incorrect")
        setUsername("")
        setPassword("")
      }
}
    return (
      <Container className="login-container">
        <h2 style={{marginTop: "5px"}}>Sign In</h2>
        {/* <LoginTranslator /> */}
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="name"
                name="username"
                value={username}
                placeholder="MyUserName"
                onChange={e => setUsername(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="********"
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            
          </Col>
          <Button className="login-btns">
            <Link to='/login' onClick={login} value="login">Sign In</Link>
          </Button>

          <Col>
          <Button className="login-btns"><Link to="/profile" />Already Logged in?</Button>
          </Col>

          <Col><Button className="login-btns" value="registration">
            <Link to="/register" />Sign Up
            </Button></Col>
        </Form>
      </Container>
    );

    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);