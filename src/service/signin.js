const APIENDPOINT = process.env.API_ENDPOINT;

async function signin(emailId, password) {
  
    const response = await fetch(`${APIENDPOINT}/api/user/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password })
    });
    console.log(response);
    if (!response.ok) {
        throw new Error(
            `login fail HTTP status ${
                response.status
            }`
        );
    }
    const data = await response.json();
    return data;
}
export default signin;