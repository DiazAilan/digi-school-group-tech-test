import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import purple from "@material-ui/core/colors/purple";

export const digiSchoolPrimaryColor = {
	50: '#e6f0f5',
	100: '#c0d9e6',
	200: '#97c0d5',
	300: '#6da6c4',
	400: '#4d93b8',
	500: '#2e80ab',
	600: '#2978a4',
	700: '#236d9a',
	800: '#1d6391',
	900: '#125080',
	A100: '#b4dcff',
	A200: '#81c4ff',
	A400: '#4eacff',
	A700: '#35a0ff',
	'contrastDefaultColor': 'light',
};

/* For use in material-ui/src/styles/colors.js */
export const digiSchoolAccentColor = {
	50: '#f6e8f2',
	100: '#e7c6de',
	200: '#d8a0c8',
	300: '#c879b1',
	400: '#bc5da1',
	500: '#b04090',
	600: '#a93a88',
	700: '#a0327d',
	800: '#972a73',
	900: '#871c61',
	A100: '#ffc1e7',
	A200: '#ff8ed4',
	A400: '#ff5bc0',
	A700: '#ff41b7',
	'contrastDefaultColor': 'light',
};

export const digiSchoolTheme = createMuiTheme({
	palette: {
		primary: digiSchoolPrimaryColor,
		secondary: digiSchoolAccentColor,
	}
});