import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {},
  }),
);
const index = ({ className }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}>MainLayout</div>;
};
export default index;
