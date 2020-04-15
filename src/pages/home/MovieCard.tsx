import React, { useState, useContext, useEffect } from "react";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	createStyles,
	makeStyles,
	Theme,
	Typography,
} from "@material-ui/core";
import MoviesContext from "./MoviesContext";
import {useTranslation} from "react-i18next";

export interface MovieCardInterface {
	Title: string;
	Year: string;
	imdbID: string;
	Poster: string;
}

interface MovieCardProps {
	key: string,
	movie: MovieCardInterface,
	onCardClick: Function,
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			cursor: 'pointer',
			display: 'inline-block',
			margin: '0 8px 16px',
			maxWidth: 300,
			textAlign: 'left',
			transition: 'all 0.5s',
			width: 'calc(50% - 16px)',
			'&.selected': {
				background: '#5ae080'
			},
			[theme.breakpoints.down('sm')]: {
				width: '100%',
			},
		},
		media: {
			height: 280,
		},
		cardContent: {
			height: 120,
		},
		cardAction: {
			justifyContent: 'center',
		}
	}),
);

function MovieCard(props: MovieCardProps) {
	const classes = useStyles();
	const [hover, setHover] = useState(false);
	const [selected, setSelected] = useState(false);
	const context = useContext(MoviesContext);
	const { t } = useTranslation();

	const evaluateSelection = () =>  {
		return context.selected.includes(props.movie.imdbID);
	}

	useEffect(() => {
		setSelected(evaluateSelection());
	}, [context.selected])

	return (
		<Card
			className={selected ? classes.card + ' selected' : classes.card}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			raised={hover || selected}
			onClick={() => props.onCardClick(props.movie.imdbID)}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.movie.Poster}
					title={props.movie.Title}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom component="h3">
						{props.movie.Title}
					</Typography>
					<Typography color="textSecondary" component="p">
						{props.movie.Year}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
				<Button size="small">
					{t(selected ? 'home.selected' : 'home.vote')}
				</Button>
			</CardActions>
		</Card>
	)
}

export default MovieCard;