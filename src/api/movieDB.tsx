import axios from 'axios';

export const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '79aaa376e1b9866d4f5e901953cab782',
        language: 'es-ES',
    },
});
