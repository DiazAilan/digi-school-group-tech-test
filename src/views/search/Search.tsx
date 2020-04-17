import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";
import { fetchMovies } from "../../services/MoviesService";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchContext from "./SearchContext";
import Results from "./Results";
import {useTranslation} from "react-i18next";

const DEFAULT_SEARCH = 'Pirate';
const REQUEST_DEBOUNCE_TIME = 1000;

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
	const [searchInput, setSearchInput] = useState(DEFAULT_SEARCH);
	const [ready, setReady] = useState(false);
	const [error, setError] = useState('');
	const [searchCriteria, setSearchCriteria,] = useState(DEFAULT_SEARCH);
	const { t } = useTranslation();

	useEffect(() => {
		if (searchCriteria) {
			fetchMovies(searchCriteria)
				.then(res => {
					res.Error && setError(res.Error);
					setMovies(res.Search);
					setReady(true);
				})
				.catch((error: Error) => {
					setError(error.message);
					setMovies([]);
					setReady(true);
				});
		}
	}, [searchCriteria])

	useEffect(() => {
		if (searchInput) {
			setReady(false);
			let updateTimeout = setTimeout(() => {
				setSearchCriteria(searchInput);
			}, REQUEST_DEBOUNCE_TIME);
			return () => {
				clearTimeout(updateTimeout);
			};
		} else {
			setError(t('search.noSearch'));
			setMovies([]);
			setReady(true);
		}
	}, [searchInput])

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
	};

	return (
		<Container fixed className={classes.root}>
			<div>
				<h2>{t('common.search')}</h2>
				<Container fixed>
					<form className={classes.root} noValidate autoComplete="off">
						<TextField id="outlined-basic" variant="outlined"
							className={classes.searchInput}
		          label={t('common.search')}
							onChange={handleSearchChange}
							value={searchInput}
						/>
					</form>
					{ready
						? <SearchContext.Provider
							value={{movies: movies, error: error}}>
								<Results/>
							</SearchContext.Provider>
						: <Container className={classes.loadingContainer}>
								<CircularProgress color="secondary" size={48}/>
							</Container>
					}
				</Container>
			</div>
		</Container>
	)
}

export default Search;