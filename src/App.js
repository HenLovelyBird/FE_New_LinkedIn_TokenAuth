import React from 'react';
import { Container } from 'reactstrap'
import './App.css';
import LoginIndex from './Pages/Login/LoginIndex.jsx'
import GETProfile from './APIs/Profile/getProfile'

function App() {

  componentDidMount = async (e) => {
    const Token = localStorage.getItem("access_token")
    if (Token) { 
        const response = await fetch("http://localhost:7000/users/refresh", { 
            headers: {
             "Authorization": "Bearer " + Token
            },
            method: "POST"
        })
   
        if (response.ok){ 
            const userJson = await response.json();
            this.props.setUserToken(userJson.access_token)
            localStorage.setItem("access_token", userJson.access_token)
            console.log("token was ok, refreshed")
        }
        else{ 
            delete localStorage["access_token"]
            console.log("token was expired, removed")
        }
    }
   }

   componentDidMount = async () => {
    let response = await GETProfile();
    this.setState({
      profile: response
    })
    console.log(response)
  } 
   
  return (
    <Container>
      <h1> Welcome! Ready to login or register!</h1>
      <LoginIndex />
      <RegistrationComponent />
    </Container>
  );

  
}          

export default App;
