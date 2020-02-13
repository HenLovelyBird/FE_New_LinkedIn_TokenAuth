import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";
import "../Profile/style.css";
import ProfileInfo from "./Components/ProfileInfo";
import GETProfile from '../../APIs/Profile/getProfile.js'


class Profile extends React.Component {
  state = {
    profile: {}
  };
  
  componentDidMount = async () => {
    let response = await GETProfile();
    this.setState({
      profile: response
    })
    console.log(response)
  }
  render() {
    
    const greeting = `Hello, ${this.state.profile.firstname}!`

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
}

export default Profile;
