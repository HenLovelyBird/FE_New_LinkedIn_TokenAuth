import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";
import "../Profile/style.css";
import ProfileInfo from "./Components/ProfileInfo";
import GETProfile from '../../APIs/Profile/getProfile.js'
import { connect } from "react-redux"

const mapStatetoProps = state => state 

const greeting = `Hello, ${this.state.profile.username}!`

componentDidMount = async () => {
  //getting the access_token from  the local storage
 const Token = localStorage.getItem("access_token")
 if (Token) { //was the user already signed in?
     const response = await fetch("http://localhost:7000/users/refresh", { //is the token still valid?
         headers: {
          "Authorization": "Bearer " + Token
         },
         method: "POST"
     })

     if (response.ok){ //if it's valid, i'm replacing the old one and send it to the store
         const userJson = await response.json();
         this.props.setUserToken(userJson.access_token)
         localStorage.setItem("access_token", userJson.access_token)
         console.log("token was ok, refreshed")
     }
     else{ //else, token is not valid, let me remove it!
         delete localStorage["access_token"]
         console.log("token was expired, removed")
     }
 }
}

function Profile(props) {
  

    return (<>
      <Jumbotron fluid id="bg-cover">
        <Container fluid>
          <Row >
            <Col>
              <h2 id="greeting">{greeting}</h2>
              <br />
              <img
                id="profpic"
                src="https://picsum.photos/200"
                alt="profile pic"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <ProfileInfo profile={this.state.profile} />

    </>);
  }

export default connect(mapStatetoProps)(Profile);
