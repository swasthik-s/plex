import axios from 'axios';

const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query: string) => {
    const { data } = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return data.Search;
};
