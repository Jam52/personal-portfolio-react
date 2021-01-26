import React from 'react';
import styles from './ImageCarousel.module.scss';

const Slide = (props) => {
  return (
    <img
      src={props.url}
      className={styles.slide}
      alt=""
      style={{ width: props.width }}
    />
  );
};

export default Slide;
