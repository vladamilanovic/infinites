import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
  },
}));

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpen = () => {
    setIsMobileDrawerOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Navbar
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      {children}
    </div>
  );
};

export default BaseLayout;
