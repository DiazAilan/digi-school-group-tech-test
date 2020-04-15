import {
    createStyles,
    Drawer,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
    useTheme,
} from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

export interface NavigationMenuProps {
    open: boolean;
    onCloseMenuClick: Function;
    options: MenuOption[];
}

export interface MenuOption {
    icon: string;
    path: string;
    name: string;
}

const DRAWER_WIDTH = 180;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('sm')]: {
          width: DRAWER_WIDTH * 4/3,
        },
      },
      drawerOpen: {
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')]: {
          width: DRAWER_WIDTH * 4/3,
        },
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7) + 1,
        },
    },
    navbarList: {
        '& a': {
            textDecoration: 'none',
            color: 'rgba(0,0,0,0.87)'
        }
    }
  }),
);

function NavigationMenu(props: NavigationMenuProps) {
    const classes = useStyles();
    const theme = useTheme();

    const handleCloseMenuClick = () => {
        props.onCloseMenuClick();
    }

    return (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: props.open,
              [classes.drawerClose]: !props.open
            })
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleCloseMenuClick}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <List className={classes.navbarList}>
            {props.options.map((option: MenuOption) => (
              <Link to={option.path} key={option.name} onClick={handleCloseMenuClick}>
                <ListItem button>
                    <ListItemIcon>
                      <Icon>{option.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={option.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
    )
}

export default NavigationMenu;