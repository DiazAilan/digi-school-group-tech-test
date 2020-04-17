import React from "react";

export interface MovieResult {
	imdbID: string;
	Title: string;
}

const SearchContext = React.createContext({
	movies: [] as MovieResult[],
	error: '',
});

export default SearchContext;