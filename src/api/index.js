
// token for API github
//const TOKEN = "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";
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