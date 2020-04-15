import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { fetchMovieDetail } from "../../services/movies.service";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			textAlign: 'center'
		},
		contentWrapper: {
			display: 'flex',
			flexDirection: 'column',
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row',
			},
		},
		posterContainer: {
			textAlign: 'center',
			[theme.breakpoints.up('sm')]: {
				textAlign: 'right',
			},
			'& img': {
				width: '100%',
				maxWidth: 300,
				borderRadius: 4
			}
		},
		infoContainer: {
			textAlign: 'justify'
		},
		loadingContainer: {
			height: 280,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	}),
);

function Detail() {
	const classes = useStyles();
	const [movie, setMovie] = useState({} as any);
	const [ready, setReady] = useState(false);
	const routeParams = useParams() as {movieId: string};
	const movieId = routeParams.movieId;

	useEffect(() => {
		setReady(false);
		fetchMovieDetail(movieId)
		.then(res => {
			setMovie(res);
			setTimeout(() => setReady(true), 500);
		})
		.catch(() => {
			setMovie({});
			setTimeout(() => setReady(true), 500);
		});
	}, [])

	useEffect(() => {
		if (movie.Poster) {
			setTimeout(() => setReady(true), 500);
		}
	}, [movie])

	return (
		<Container fixed className={classes.root}>
			{ ready
				? (
					<div>
						<h2>{movie.Title}</h2>
						<div className={classes.contentWrapper}>
							<Container className={classes.posterContainer}>
								<img src={movie.Poster}></img>
							</Container>
							<Container className={classes.infoContainer}>
								<ul>
									<DetailFields movie={movie}></DetailFields>
									{movie.imdbRating && <li>IMDB Rating: {movie.imdbRating}</li>}
								</ul>
								{ movie.Plot !== 'N/A' && <p><b>Plot</b><br/>{movie.Plot}</p> }
							</Container>
						</div>
					</div>)
				: (
					<Container className={classes.loadingContainer}>
						<CircularProgress color="secondary" size={48}/>
					</Container>)
			}
		</Container>
	)
}

interface DetailFieldsProps {
	movie: any,
}

function DetailFields(props: DetailFieldsProps): any {
	const fields = [
		'released', 'rated', 'runtime', 'genre', 'director',
		'writer', 'actors', 'language', 'country', 'awards'
	]
	let elements = [] as any[];
	fields.forEach((field: string) => {
		const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
		const targetField = props.movie[capitalizedField];
		const shouldBeInserted = targetField && targetField !== 'N/A';
		if (shouldBeInserted) {
			elements.push(<li>{capitalizedField}: {targetField}</li>);
		}
	})
	return elements;
}

export default Detail;