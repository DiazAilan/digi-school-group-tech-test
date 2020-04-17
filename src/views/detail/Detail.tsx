import React, {ReactElement, useEffect, useState} from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { fetchMovieDetail } from "../../services/MoviesService";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useTranslation} from "react-i18next";
import {capitalize} from "../../Utils";

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
	const [movie, setMovie] = useState();
	const [ready, setReady] = useState(false);
	const routeParams = useParams() as {movieId: string};
	const movieId = routeParams.movieId;
	const { t } = useTranslation();

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
	}, [movieId])

	useEffect(() => {
		if (movie?.Poster) {
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
								<img alt={movie.Title} src={movie.Poster}></img>
							</Container>
							<Container className={classes.infoContainer}>
								<ul>
									<DetailFields movie={movie}></DetailFields>
									{movie.imdbRating && <li>IMDB Rating: {movie.imdbRating}</li>}
								</ul>
								{ movie.Plot !== 'N/A' &&
									<p><b>{t("detail.Plot")}</b><br/>{movie.Plot}</p>
								}
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
	movie: {
		[index: string]: string
	};
}

function DetailFields(props: DetailFieldsProps): ReactElement {
	const { t } = useTranslation();
	const fields = [
		'released', 'rated', 'runtime', 'genre', 'director',
		'writer', 'actors', 'language', 'country', 'awards'
	]
	const filteredFields = fields.filter(field => {
		const targetField = props.movie[capitalize(field)];
		return targetField && targetField !== 'N/A';
	});
	const elements = filteredFields.map(field => {
		return (
			<li key={field}>
				{t('detail.' + capitalize(field))}: {props.movie[capitalize(field)]}
			</li>
		)
	})
	return <>{elements}</>;
}

export default Detail;