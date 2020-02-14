const URL = "http://localhost:7000/profiles/5e4566dd2fa88600a0d1e4d3" 
//upon signup, from username heni3 and password of reallysecurepassword
// the token is generated (along with hash and salt) the id is obtained from 
// https://jwt.io/ under payload: data after you submit the token
// when heroku deployment works: "https://linkedinmockup.herokuapp.com/profiles/5e2b0f3b27480c54f90d34c3"
const headers = new Headers({
    "Content-Type": "application/json"
});

const GETProfile = async () => {
    try {
        let response = await fetch(URL, {
            method: "GET",
            headers
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}

export default GETProfile;