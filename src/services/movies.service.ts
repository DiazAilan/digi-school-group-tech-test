import * as configuration from '../config.json';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'https://www.omdbapi.com/'
});

const MOVIE_DB_PATH = `?apikey=${configuration.clientApiKey}`;
const MOVIE_DB_SEARCH = '&s='
const MOVIE_DB_DETAIL = '&i='

export function fetchMovies(searchCriteria: string) {
	const url = MOVIE_DB_PATH + MOVIE_DB_SEARCH + searchCriteria;
	return get(url)
		.then((response: any) => response.data.Search)
		.catch((err: Error) => err);
}

export function fetchMovieDetail(movieId: string) {
	const url = MOVIE_DB_PATH + MOVIE_DB_DETAIL + movieId;
	return get(url)
		.then((response: any) => response.data)
		.catch((err: Error) => err);
}

function get(url: string) {
	return axios.get(url);
}