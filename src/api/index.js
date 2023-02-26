
// token for API github
//const TOKEN = "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";

export const fetchApiData = (url) => {
    return new Promise((resolve, reject) => {
        const requestMethod = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + TOKEN
            }
        };

        fetch(url, requestMethod)
            .then( response => {
                if(response.status === 200) {
                    resolve(response.json());
                }

            })
            .catch(error => {
                reject(error);
            });
    });
};