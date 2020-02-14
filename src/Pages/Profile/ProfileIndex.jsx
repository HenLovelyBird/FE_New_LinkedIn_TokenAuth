import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";
import "../Profile/style.css";
// import ProfileInfo from "./Components/ProfileInfo";
import { connect } from "react-redux"

const mapStatetoProps = state => state 

function Profile(props) {

  // const greeting = `Hello, ${props.profile.username}!`

    return (<>
      <Jumbotron fluid id="bg-cover">
        <Container fluid>
          <Row >
            <Col>
              <h2 id="greeting">Hello, Welcome Back!</h2>
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

      {/* <ProfileInfo profile={props.profile} /> */}

    </>);
  }

export default connect(mapStatetoProps)(Profile);
