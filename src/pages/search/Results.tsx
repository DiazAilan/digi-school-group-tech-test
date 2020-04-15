import React, {ReactComponentElement, useContext, useEffect, useState} from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Icon, TextField } from "@material-ui/core";
import { fetchMovies } from "../../services/movies.service";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchContext from "./SearchContext";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& a': {
				textDecoration: 'none',
				color: 'rgba(0,0,0,0.87)',
			}
		},
		resultCard: {
			marginBottom: 16,
			cursor: 'pointer',
			position: 'relative',
			'&:hover': {
				boxShadow: `0px 5px 5px -3px rgba(0,0,0,0.2),
                        0px 8px 10px 1px rgba(0,0,0,0.14),
                        0px 3px 14px 2px rgba(0,0,0,0.12)`
			},
		},
		resultCardContent: {
			'&:last-child': {
				paddingBottom: 16
			},
			'& .material-icons': {
				position: 'absolute',
				right: 16,
				top: 20
			},
			'& h2': {
				width: 'calc(100% - 28px)',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
			}
		}
	}),
);

function Results(): any {
	const classes = useStyles();
	const context = useContext(SearchContext);

	return (
		context.movies && context.movies.length
			? context.movies.map((movie: any) => (
				<div className={classes.root}>
					<Link to={'/detail/' + movie.imdbID} key={movie.imdbID}>
						<Card className={classes.resultCard}>
							<CardContent className={classes.resultCardContent}>
								<Typography variant="h5" component="h2">
									{movie.Title}
								</Typography>
								<Icon>visibility</Icon>
							</CardContent>
						</Card>
					</Link>
				</div>))
			: <Typography>No results</Typography>
	)
}

export default Results;