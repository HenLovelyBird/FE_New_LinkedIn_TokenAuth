import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../Profile/style.css";

class ProfileInfo extends Component {
  render() {
    const prof = this.props.profile
    return (
      <Container id="profcontainer" fluid>
        <Col><Row>{prof.firstname}</Row></Col>
        <Row>{prof.surname}</Row>
        <Row>{prof.title}</Row>
        <Row>{prof.area}</Row>
        <Row>{prof.bio}</Row>
      </Container>
    );
  }
}

export default ProfileInfo;
