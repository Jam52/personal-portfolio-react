import React from 'react';
import classes from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        {props.text}
        <span className={classes.blink}>_</span>
      </h1>
    </div>
  );
};

export default Header;
