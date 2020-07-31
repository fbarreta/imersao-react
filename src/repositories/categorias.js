import config from './../config';

function getAllWithVideos() {
    console.log(config.URL);
    return fetch(`${config.URL}/categorias?_embed=videos`).then(async (resp) => {
        return await resp.json();
    });
}

export default { getAllWithVideos }
