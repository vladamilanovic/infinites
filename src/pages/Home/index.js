import React from 'react';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import { Grid, makeStyles, Typography, withWidth } from '@material-ui/core';
import classNames from 'classnames';
import image from '../../assets/main.png';
import calculateSpacing from './calculateSpacing';
import Card from './Card';

AOS.init({ once: true });
const MAX_COUNT = 44;

const useStyles = makeStyles((theme) => ({
  headWrapper: {
    position: 'relative',
    paddingBottom: theme.spacing(2),
  },
  headContainer: {
    marginTop: 90,
    background: `url(${image})`,
    height: '33vw',
    maxHeight: 460,
    backgroundSize: 'cover',
  },
}));

const Home = (props) => {
  const { width } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.headWrapper}>
        <div className={classNames('container-fluid', classes.headContainer)}></div>
      </div>

      <div className='container-fluid'>
        <Typography variant='h6' align='center' className='lg-mg-bottom'>
          A collection of 1/1 artworks created by a generative adversarial network trained with art
          history.
          <br />
          Minted: 0/44
        </Typography>
        <div className='container-fluid'>
          <Grid container spacing={calculateSpacing(width)}>
            {new Array(MAX_COUNT).fill(0).map((_, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                data-aos='zoom-in-up'
                data-aos-delay={200}
                key={index}
              >
                <Card index={`${index + 1}`} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withWidth()(Home);
