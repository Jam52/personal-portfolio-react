import React, { useEffect } from 'react';
import classes from './ContactPage.module.scss';
import Header from '../../Components/Header/Header';
import FadeInTransition from '../../Components/FadeInTransition/FadeInTransition';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });
  return (
    <div>
      <Header
        text="Contact me"
        icon={process.env.PUBLIC_URL + '/images/contactMe.svg'}
      />
      <FadeInTransition>
        <main className="container">
          <p className={classes.landing}>
            Please feel free to reach out, I am currently looking for employment
            as a junior developer but am open to any and all freelancing
            opportunities.
          </p>
          <div className={`${classes.details} flow-vert`}>
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
        </main>
      </FadeInTransition>
    </div>
  );
};

export default ContactPage;
