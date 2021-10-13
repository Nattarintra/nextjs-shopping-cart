import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

import NavBar from 'src/components/NavBar';

const useStyles = makeStyles((_) =>
  createStyles({
    root: {},
  }),
);
const MainLayout = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <NavBar />
    </div>
  );
};
export default MainLayout;
