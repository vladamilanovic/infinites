import React from 'react';
import { Redirect } from 'react-router';
import { Box, Button, Chip, Grid, makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing(4),
  },
  container: {
    marginTop: 90,
  },
  buttonMint: {
    marginRight: theme.spacing(2),
  },
  img: {
    width: '100%',
  },
}));

const InfiniteDetail = (props) => {
  const infiniteId = props.match.params.id;
  const classes = useStyles();

  if (isNaN(infiniteId)) return <Redirect to='/' />;

  return (
    <>
      <div className={classes.root}>
        <div className={classNames('container-fluid', classes.container)}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <img
                src={`${process.env.PUBLIC_URL}/image/Infinites${infiniteId.padStart(
                  2,
                  '0'
                )}@2x.png`}
                alt='infinite'
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mt={4} mb={3}>
                <Typography variant='h6' color='secondary'>
                  {`Infinite #${infiniteId.padStart(2, '0')}`}
                </Typography>
              </Box>
              <Button variant='contained' color='secondary' className={classes.buttonMint}>
                Mint
              </Button>
              <Button variant='outlined' color='secondary'>
                See it on OpenSea
              </Button>

              <Box mt={4} mb={2}>
                <Typography variant='h6' color='textPrimary'>
                  Attributes
                </Typography>
              </Box>

              <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                <Typography variant='subtitle1'>Still Life</Typography>
                <Chip label='13%' variant='outlined' color='secondary' />
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                <Typography variant='subtitle1'>Landscape</Typography>
                <Chip label='7%' variant='outlined' color='secondary' />
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                <Typography variant='subtitle1'>Seascape</Typography>
                <Chip label='1%' variant='outlined' color='secondary' />
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                <Typography variant='subtitle1'>Portrait</Typography>
                <Chip label='3%' variant='outlined' color='secondary' />
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                <Typography variant='subtitle1'>Abstraction</Typography>
                <Chip label='81%' variant='outlined' color='secondary' />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default InfiniteDetail;
