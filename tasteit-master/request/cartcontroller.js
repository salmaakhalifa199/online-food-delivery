async function additemtocard(foodcart ,item) {
    return fetch('http://localhost:8080/addItemToCart/', {
        method: 'POST',
        body: JSON.stringify(foodcart , item),
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
    }async function increaseItemQuantity(foodcart , item , quantity) {
        return fetch('http://localhost:8080/increaseItemQuantity/{quantity}/', {
            method: 'POST',
            body: JSON.stringify(oodcart , item , quantity),
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
        }async function reduceItemQuantity(foodcart , item , quantity) {
            return fetch('http://localhost:8080/reduceItemQuantity/{quantity}/', {
                method: 'POST',
                body: JSON.stringify(foodcart , item , quantity),
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
                async function removeItem(foodcart , item) {
                    return fetch('http://localhost:8080/removeItem/', {
                        method: 'POST',
                        body: JSON.stringify(foodcart , item),
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
                    export{additemtocard,increaseItemQuantity,reduceItemQuantity,removeItem}