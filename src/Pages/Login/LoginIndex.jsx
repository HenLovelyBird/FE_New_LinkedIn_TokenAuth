import React from 'react';
import {
  Container, Col, Form, Row,
  FormGroup, Label, Input,
  Button, 
} from 'reactstrap';
import '../Login/style.css';
import { Link, withRouter } from 'react-router-dom'
// import LoginTranslator from './Components/LoginTranslatorComponent';
import { useState } from "react"
import {connect} from "react-redux"
import RegistrationComponent from './Components/RegistrationComponent';
// import authCheckLogin from '../../APIs/Login/authCheckLogin' i have to be able to write it as cDM in here to import it

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setUserToken: token => dispatch({
    type:"SET_ACCESS_TOKEN",
    payload: token
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
  
  const login = async (e) => {  
    e.preventDefault()
    const res = await fetch("http://localhost:7000/users/signin", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    if (res.ok){
        const resJson = await res.json();
        console.log(resJson)
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

  const register = async(e) => {
    const res = await fetch("http://localhost:7000/users/registration", {
    })
    if (res.ok){
      const resJson = await res.json();
      console.log(resJson)
      if(saveCredentials)
        localStorage.setItem("access_token", resJson.access_token)

        props.setUserToken(resJson.access_token)

        props.history.push("/signin")
    }
    else {
      setError("please enter valid username and password")
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
                type="username"
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
                value={password}
                placeholder="********"
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>

            <Row>
            <span>Save Credentials?</span>
            
            <Col>
            <input type="checkbox" 
            value={saveCredentials} 
            onChange={e => setSaveCredentials(!saveCredentials)}/>
            </Col>
            </Row>

          </Col>
          <Button className="login-btns" value="login" onClick={login} > 
          Sign In
          </Button>

          
          <Button className="login-btns" value="Registration" onClick={register}>
          <Link to={RegistrationComponent} />
            Sign Up
          </Button>
          
          {error && <h2>{error}</h2>}
        </Form>
      </Container>
    );

    
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loginpage));