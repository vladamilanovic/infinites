import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import image from '../../assets/user.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing(4),
  },
  container: {
    marginTop: 90,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classNames('container-fluid', classes.container)}>
          <img src={image} alt='artist' />

          <Typography variant='h6'>
            This project was made by artist FAR.
            <br />
            Say hi on twitter, instagram, or email.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
