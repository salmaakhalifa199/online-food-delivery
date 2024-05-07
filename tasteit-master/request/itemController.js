async function additem(item) {
    return fetch('http://localhost:8080/add/', {
        method: 'POST',
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
    async function updateitem(item) {
        return fetch('http://localhost:8080/update/', {
            method: 'PUT',
            body: JSON.stringify(item),
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
        async function viewitem(itemId) {
            return fetch('http://localhost:8080/view/{itemId}/', {
                method: 'GET',
                body: JSON.stringify(itemId),
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
            async function getByCategory(category) {
                return fetch('http://localhost:8080/getByCategory/', {
                    method: 'POST',
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
                async function getByName(itemName) {
                    return fetch('http://localhost:8080/getByName/{name}/', {
                        method: 'POST',
                        body: JSON.stringify(itemName),
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
                    export{additem,updateitem,viewitem,getByCategory,getByName}


