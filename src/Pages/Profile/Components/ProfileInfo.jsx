import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../Profile/style.css";

class ProfileInfo extends Component {
  render() {
    return (
      <Container id="profcontainer" fluid>
        <Col><Row>{this.props.profile.firstname}</Row></Col>
        <Row>{this.props.profile.surname}</Row>
        <Row>{this.props.profile.title}</Row>
        <Row>{this.props.profile.area}</Row>
        <Row>{this.props.profile.bio}</Row>
      </Container>
    );
  }
}

export default ProfileInfo;
