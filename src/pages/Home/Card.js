import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  img: { width: '100%' },
  m0: {
    margin: 0,
  },
}));

const Card = ({ index }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/infinite/${index}`);
  };

  return (
    <figure className={classes.m0}>
      <img
        src={`${process.env.PUBLIC_URL}/image/Infinites${index.padStart(2, '0')}@2x.png`}
        alt='Infinite'
        className={classes.img}
      />
      <Box ml={2}>
        <figcaption>
          <Box mb={3}>{`Infinite #${index.padStart(2, '0')}`}</Box>
          <Button variant='outlined' color='secondary' onClick={handleClick}>
            Mint
          </Button>
        </figcaption>
      </Box>
    </figure>
  );
};

export default Card;
