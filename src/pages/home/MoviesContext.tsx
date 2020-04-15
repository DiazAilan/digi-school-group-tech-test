import React from "react";

const MoviesContext = React.createContext({
    selected: [] as string[],
    toggleMovieSelection: (movieID: string) => {}
});

export default MoviesContext;