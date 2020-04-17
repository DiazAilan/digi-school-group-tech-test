import React from "react";

const SearchContext = React.createContext({
	movies: [] as any[],
	error: '',
});

export default SearchContext;