import React from 'react';
import clsx from 'clsx'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

 const Loading = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'column', 'is-full')}>
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loading