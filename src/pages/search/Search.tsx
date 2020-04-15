import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";
import { fetchMovies } from "../../services/movies.service";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchContext from "./SearchContext";
import Results from "./Results";

const DEFAULT_SEARCH = 'Pirate';
const LOADING_ANIMATION_DELAY = 500;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		searchInput: {
			marginBottom: 16
		},
		cardsContainer: {
			textAlign: 'center'
		},
		loadingContainer: {
			height: 280,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	}),
);

function Search() {
	const classes = useStyles();
	const [movies, setMovies] = useState([]);
	const [searchCriteria, setSearchCriteria] = useState(DEFAULT_SEARCH);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(false);
		fetchMovies(searchCriteria)
		.then(res => {
			setMovies(res);
			setTimeout(() => setReady(true), LOADING_ANIMATION_DELAY);
		})
		.catch(() => {
			setMovies([]);
			setTimeout(() => setReady(true), LOADING_ANIMATION_DELAY);
		});
	}, [searchCriteria])

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchCriteria(event.target.value);
	};

	return (
		<Container fixed className={classes.root}>
			<div>
				<h2>Search</h2>
				<Container fixed>
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							id="outlined-basic"
							label="Search"
							variant="outlined"
							value={searchCriteria}
							className={classes.searchInput}
							onChange={handleSearchChange}/>
					</form>
					{ready
						? <SearchContext.Provider value={{movies: movies}}>
								<Results />
							</SearchContext.Provider>
						: (
							<Container className={classes.loadingContainer}>
								<CircularProgress color="secondary" size={48}></CircularProgress>
							</Container>
						)}
				</Container>
			</div>
		</Container>
	)
}

export default Search;