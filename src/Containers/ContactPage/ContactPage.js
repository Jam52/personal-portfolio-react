import React from 'react';
import classes from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.landing}>
        <h1 className={classes.title}>Contact me_</h1>
        <p className={classes.landing_para}>
          Please feel free to reach out, I am currently looking for employment
          as a junior developer but am open to any and all freelancing
          opportunities.
        </p>
        <div className={classes.contact}>
          <h2>Email:</h2>
          <p>jamie.sajdak@gmail.com</p>
        </div>
        <div className={classes.contact}>
          <h2>Tel:</h2>
          <p>647 465 4864</p>
        </div>
        <div className={classes.contact}>
          <h2>Location:</h2>
          <p>Toronto, ON</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
