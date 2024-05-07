async function login(cat) {
    return fetch('http://localhost:8080/login/', {
        method: 'Post',
        body: JSON.stringify(cat),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorResponse => {
                throw new Error(errorResponse.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        throw error}); 
    }

export{login}
