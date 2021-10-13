import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) =>
  createStyles({
    rroot: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    navSpace: {
      marginRight: theme.spacing(2),
    },
  }),
);

const NavBar = ({ className }) => {
  const classes = useStyles();

  return (
    <>
      <div className={clsx(classes.root, className)}>
        <AppBar className={classes.grow} position="static">
          <Toolbar>
            <Typography
              className={clsx(classes.title, classes.navSpace)}
              color="inherit"
              variant="h4"
            >
              Clas Olhson
            </Typography>
            <IconButton
              aria-label="menu"
              className={classes.menuButton}
              color="inherit"
              edge="start"
            >
              <Badge
                badgeContent={4}
                className={classes.navSpace}
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default NavBar;
