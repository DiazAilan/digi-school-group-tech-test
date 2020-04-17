import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Snackbar, IconButton, Icon } from "@material-ui/core";
import { fetchMovies } from "../../services/MoviesService";
import MovieCard, { MovieCardInterface } from "./MovieCard";
import MoviesContext from "./MoviesContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useTranslation} from "react-i18next";

const LOADING_ANIMATION_DELAY = 500;
const MAX_MOVIES_VOTES = 3;
const ERROR_MESSAGE_DURATION = 6000;
const DEFAULT_SEARCH = 'elm-street'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		cardsContainer: {
			textAlign: 'center',
			paddingLeft: 0,
			paddingRight: 0,
		},
		loadingContainer: {
			height: 280,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	}),
);

function Home() {
	const classes = useStyles();
	const [movies, setMovies] = useState([]);
	const [selectedMovies, setSelectedMovies] = useState([] as string[]);
	const [ready, setReady] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { t } = useTranslation();

	const toggleMovieSelection = (movieID: string) => {
		const outputSelectedMovies = [...selectedMovies];
		const index = selectedMovies.indexOf(movieID);
		if (selectedMovies.includes(movieID)) {
			outputSelectedMovies.splice(index, 1);
		} else if (selectedMovies.length < MAX_MOVIES_VOTES) {
			outputSelectedMovies.push(movieID);
		} else {
			setError(true);
			setErrorMessage(t('home.maxMoviesError'))
		}
		setSelectedMovies(outputSelectedMovies);
	}

	const handleErrorClose = (
		event: React.SyntheticEvent | React.MouseEvent,
		reason?: string
	) => {
		if (reason !== 'clickaway') {
			setError(false);
			setErrorMessage('');
		}
	};

	useEffect(() => {
		setReady(false);
		fetchMovies(DEFAULT_SEARCH)
			.then(res => {
				setMovies(res.Search);
				setTimeout(() => setReady(true), LOADING_ANIMATION_DELAY);
			})
			.catch((error: Error) => {
				setError(true);
				setErrorMessage(error.message);
				setTimeout(() => setReady(true), LOADING_ANIMATION_DELAY);
			});
	}, [])

	return (
		<Container fixed className={classes.root}>
			<h2>{t('common.home')}</h2>
			<Container fixed className={classes.cardsContainer}>
				<MoviesContext.Provider value={{
					selected: selectedMovies,
					toggleMovieSelection: toggleMovieSelection
				}}>
					{ready
						? movies.map((movie: MovieCardInterface) => (
							<MovieCard key={movie.imdbID} movie={movie}
								onVoteClick={() => toggleMovieSelection(movie.imdbID)}
							/>
						))
						: <Container className={classes.loadingContainer}>
								<CircularProgress color="secondary" size={48}/>
							</Container>
					}
				</MoviesContext.Provider>
			</Container>
			<Snackbar
				autoHideDuration={ERROR_MESSAGE_DURATION}
				message={errorMessage}
				onClose={handleErrorClose}
				open={error}
				action={
					<React.Fragment>
						<IconButton size="small" aria-label="close" color="inherit"
							onClick={handleErrorClose}>
							<Icon>close</Icon>
						</IconButton>
					</React.Fragment>
				}
			/>
		</Container>
	)
}

export default Home;