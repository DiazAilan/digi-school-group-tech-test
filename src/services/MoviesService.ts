import * as configuration from '../config.json';
import Axios, {AxiosResponse} from 'axios';

const axios = Axios.create({
	baseURL: configuration.baseUrl
});

const MOVIE_DB_PATH = `?apikey=${configuration.clientApiKey}`;
const MOVIE_DB_SEARCH = '&s='
const MOVIE_DB_DETAIL = '&i='

export function fetchMovies(searchCriteria: string) {
	const url = MOVIE_DB_PATH + MOVIE_DB_SEARCH + searchCriteria;
	return axios.get(url)
		.then((response: AxiosResponse) => response.data)
}

export function fetchMovieDetail(movieId: string) {
	const url = MOVIE_DB_PATH + MOVIE_DB_DETAIL + movieId;
	return axios.get(url)
		.then((response: AxiosResponse) => response.data)
}