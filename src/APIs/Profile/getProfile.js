const URL = "https://linkedinmockup.herokuapp.com/profiles/5e2b0f3b27480c54f90d34c3"
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