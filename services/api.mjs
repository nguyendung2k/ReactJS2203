import fetch from 'node-fetch';
import axios from 'axios';


const getDataPostId = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await (fetch(url));
    const result = await (response.json());
    return result;
}



const getDataCommentByIdPost = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await (fetch(url));
    const result = await (response.json());
    return result;
}



const searchMovieByName = async (nameMovie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}




export const api = {
    getDataPostId,
    getDataCommentByIdPost,
    searchMovieByName
}