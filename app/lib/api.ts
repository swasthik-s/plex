import axios from 'axios';

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/multi';

export const fetchMoviesFromTMDB = async (query: string) => {
    if (!TMDB_ACCESS_TOKEN) {
        throw new Error("TMDB_ACCESS_TOKEN is missing! Check your .env file.");
    }

    try {
        const { data } = await axios.get(TMDB_BASE_URL, {
            headers: {
                Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                accept: 'application/json',
            },
            params: { query }
        });

        return data.results;
    } catch (error) {
        console.error("Error fetching from TMDB:", error);
        throw error;
    }
};
