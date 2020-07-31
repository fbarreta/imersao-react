import config from './../config';

function create(video) {
    console.log(config.URL);
    return fetch(`${config.URL}/videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(video),
    }).then(async (resp) => {
        return await resp.json();
    });
}

export default { create }
