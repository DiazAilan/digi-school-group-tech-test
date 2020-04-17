import React, { useState } from 'react';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import NavigationMenu from './components/NavigationMenu';
import Home from './views/home/Home';
import Search from './views/search/Search';
import Detail from './views/detail/Detail';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {digiSchoolGroupTheme} from "./Theme.config";

const MENU_OPTIONS = [
	{icon: 'home', path: '/', id: 'home'},
	{icon: 'search', path: '/search', id: 'search'},
];

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		hide: {
			display: 'none',
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			width: '100%'
		}
	}),
);

function App() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => setOpen(!open);
	const closeDrawer = () => setOpen(false);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<ThemeProvider theme={digiSchoolGroupTheme}>
				<BrowserRouter basename="/digi-school-group-test-tech">
					<NavigationBar onMenuClick={toggleDrawer} open={open}/>
					<NavigationMenu
						onCloseMenuClick={closeDrawer}
						open={open}
						options={MENU_OPTIONS}
					/>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						<Switch>
							<Route path="/detail/:movieId" component={Detail} />
							<Route path="/search" component={Search} />
							<Route path="/" component={Home} />
						</Switch>
					</main>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
