import React from 'react';
import classes from './ArticleHeader.module.scss';

const ArticleHeader = (props) => {
  return (
    <header className={classes.header}>
      <h2>{props.header}</h2>
    </header>
  );
};

export default ArticleHeader;
