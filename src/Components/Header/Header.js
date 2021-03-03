import React from 'react';
import classes from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.icon} alt="" className={classes.icon} />
      <header className="container">
        <h1 className={classes.header}>
          {props.text}
          <span className={classes.blink}>_</span>
        </h1>
        <img
          src={process.env.PUBLIC_URL + '/images/downArrow.svg'}
          alt="down arrow"
          className={classes.downArrow}
        />
      </header>
    </div>
  );
};

export default Header;
