import { api } from "./services/api.mjs";

const getSearchMovie = async (nameMovie) => {
    const detailMovie = await api.searchMovieByName(nameMovie);

    // console.log(detailMovie)
}

getSearchMovie('batman')


const dataMovie = api.searchMovieByName('batman')
// console.log(dataMovie);

dataMovie
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(`err`)
    })
    .finally(function () {
        console.log('Call API')
    })