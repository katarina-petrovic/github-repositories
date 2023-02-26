
// token for API github
const TOKEN = "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";

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