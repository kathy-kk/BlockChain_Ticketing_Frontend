const APIENDPOINT = process.env.API_ENDPOINT;

async function register(first_name, last_name, emailId ,password) {
  
    const response = await fetch(`${APIENDPOINT}/api/user/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, emailId, password })
    });
    console.log(response);
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
}
export default register;