import React from 'react';
import classes from './Footer.module.scss';

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <a href="https://github.com/Jam52">
        <img
          src={process.env.PUBLIC_URL + '/images/githubImg.png'}
          alt="gitbub"
        />
      </a>
      <a href="https://www.linkedin.com/in/jamie-sajdak-07559237/">
        <img
          src={process.env.PUBLIC_URL + '/images/linkedIn.png'}
          alt="linkedin"
        />
      </a>
      <a href="mailto:jamie.sajdak@gmail.com">
        <img
          src={process.env.PUBLIC_URL + '/images/emailImg.png'}
          alt="email"
        />
      </a>
    </div>
  );
};

export default Footer;
