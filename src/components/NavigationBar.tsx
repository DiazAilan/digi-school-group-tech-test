import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import React from 'react';
import clsx from 'clsx';
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const DRAWER_WIDTH = 180;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '& a': {
        textDecoration: 'none',
        color: '#fafafa'
      }
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DRAWER_WIDTH * 4/3}px)`,
      },
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
        display: 'none',
    },
  }),
);

export interface NavigationBarProps {
  onMenuClick: Function,
  open: boolean,
}

function NavigationBar(props: NavigationBarProps) {
    const classes = useStyles();

    const handleMenuClick = () => {
        props.onMenuClick();
    }

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuClick}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: props.open,
                })}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                <Link to="/">BlablaMovie</Link>
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;