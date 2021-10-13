import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);
const BackdropLoading = ({ className, open, ...rest }) => {
  const classes = useStyles();
  return (
    <Backdrop className={clsx(classes.root, className)} open={open} {...rest}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default BackdropLoading;
