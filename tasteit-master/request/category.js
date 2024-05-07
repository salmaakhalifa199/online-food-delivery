async function addCategory(cat) {
    return fetch('http://localhost:8080/addCategory/', {
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


    async function updateCategory(cat) {
        return fetch('http://localhost:8080/updateCategory/', {
            method: 'Put',
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


        async function deleteCategory(categoryId) {
            return fetch(`http://localhost:8080/deleteCategory/${categoryId}`, {
                method: 'Delete',
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


            async function viewCategory(categoryId) {
                return fetch(`http://localhost:8080/viewCategory/${categoryId}`, {
                    method: 'Get',
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


                async function allCategory() {
                    return fetch('http://localhost:8080/allCategory', {
                        method: 'Get',
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

     export{addCategory,deleteCategory,updateCategory,allCategory,viewCategory}