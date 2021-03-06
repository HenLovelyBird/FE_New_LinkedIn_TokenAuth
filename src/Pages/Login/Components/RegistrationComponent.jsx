import React from "react";
// import '../App.css';
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setUserToken: base64 =>
    dispatch({
      type: "SET_USERBASE64",
      payload: base64
    })
});

function RegisterComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [saveCredentials, setSaveCredentials] = useState(false);
  const [error, setError] = useState(undefined);

  const register = async () => {
    //create my "token" starting from username and password
    //contact the APIs to prove identity
    const res = await fetch("http://localhost:7000/users/signup", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        role
      })
    });

    if (res.ok) {
      const resJson = await res.json();
      console.log(resJson);
      if (saveCredentials)
        localStorage.setItem("access_token", resJson.access_token);

      props.setUserToken(resJson.access_token);
      props.history.push("/profile");
    } else {
      //console log
      setError("Username and password incorrect");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="*********"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="role"
          value={role}
          onChange={e => setRole(e.target.value)}
        ></input>
        <input
          type="checkbox"
          value={saveCredentials}
          onChange={e => setSaveCredentials(!saveCredentials)}
        />
        <input type="button" onClick={register} value="Registration"></input>
        {error && <h2>{error}</h2>}
      </header>
    </div>
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
);
