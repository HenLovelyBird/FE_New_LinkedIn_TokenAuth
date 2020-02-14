const URL = "http://localhost:7000/users/refresh"
const headers = new Headers ({
    "Authorization": "Bearer " + access_token
})


componentDidMount = async () => {
     //getting the access_token from  the local storage
    const Token = localStorage.getItem("access_token")
    if (Token) { //was the user already signed in?
        const response = await fetch(URL, { //is the token still valid?
            headers,
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

  export default GETToken