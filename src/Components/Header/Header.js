import React from 'react';
import classes from './Header.module.scss';

const Header = (props) => {
  return (
    <div>
      <h1 className={classes.header}>{props.text}_</h1>
    </div>
  );
};

export default Header;
