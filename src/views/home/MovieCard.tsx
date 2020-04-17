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
import {Link} from "react-router-dom";

export interface MovieCardInterface {
	Title: string;
	Year: string;
	imdbID: string;
	Poster: string;
}

interface MovieCardProps {
	key: string,
	movie: MovieCardInterface,
	onVoteClick: Function,
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			display: 'inline-block',
			margin: '0 8px 16px',
			width: '100%',
			textAlign: 'left',
			transition: 'all 0.5s',
			maxWidth: 240,
			[theme.breakpoints.up('sm')]: {
				maxWidth: 240,
				width: 'calc(50% - 16px)',
			},
			'& > button': {
				cursor: 'default',
			}
		},
		media: {
			height: 280,
			backgroundSize: 'contain',
			backgroundColor: '#fff'
		},
		cardContent: {
			height: 120,
			transition: 'background 0.5s',
			'&.selected': {
				background: '#5ae080',
			},
		},
		cardAction: {
			justifyContent: 'space-around',
			'& a': {
				textDecoration: 'none',
				color: 'rgba(0,0,0,0.87)'
			},
			'& button': {
				transition: 'all 0.5s',
				'&:hover': {
					background: '#ccc'
				}
			}
		},
		selected: {
			color: '#289045'
		}
	}),
);

function MovieCard(props: MovieCardProps) {
	const classes = useStyles();
	const [hover, setHover] = useState(false);
	const [selected, setSelected] = useState(false);
	const context = useContext(MoviesContext);
	const { t } = useTranslation();

	useEffect(() => {
		const isSelectedInContext = context.selected.includes(props.movie.imdbID);
		setSelected(isSelectedInContext);
	}, [context.selected, props.movie.imdbID])

	return (
		<Card
			className={classes.card}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			raised={hover || selected}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.movie.Poster}
					title={props.movie.Title}
				/>
				<CardContent
					className={
						selected ? classes.cardContent + ' selected' : classes.cardContent
					}>
					<Typography gutterBottom component="h3">
						{props.movie.Title}
					</Typography>
					<Typography color="textSecondary" component="p">
						{props.movie.Year}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
				<Button size="small" className={selected ? classes.selected : ''}
				        onClick={() => props.onVoteClick(props.movie.imdbID)}>
					{t(selected ? 'home.selected' : 'home.vote')}
				</Button>
				<Link to={'/detail/' + props.movie.imdbID}>
					<Button size="small">
						{t('home.info')}
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

export default MovieCard;