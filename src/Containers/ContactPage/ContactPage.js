import React from 'react';
import classes from './ContactPage.module.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ContactPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.landing}>
        <Header text="Contact me" />
        <p className={classes.landing_para}>
          Please feel free to reach out, I am currently looking for employment
          as a junior developer but am open to any and all freelancing
          opportunities.
        </p>
        <div className={classes.details}>
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

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
