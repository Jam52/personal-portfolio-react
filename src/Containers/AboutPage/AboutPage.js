import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import classes from './AboutPage.module.scss';
import sandCastle from './sandcastle.jpg';
import furniture from './furniture.jpg';
import profilePic from './profile.png';
import computer from './computer.jpg';
import road from './road.jpg';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <div className={classes.landing}>
      <Header text="About me" />
      <main className="container">
        <section className={classes.intro}>
          <img
            src={profilePic}
            className={classes.profile}
            alt="jamie photograph"
          ></img>
          <p className={classes.intro_para}>
            "Hi, thank you for checking out my portfolio site! I am an aspiring
            web developer, formerly industrial designer, with a passion for
            building things. Please scroll down for a little more about me and
            my journey so far."
          </p>
        </section>

        <section className={classes.section}>
          <div className={classes.section_paragraph}>
            <h3 className={classes.section_subtitle}>Begin at the begining</h3>

            <p>
              Ive always been a builder, one of those kids obsessed with legos,
              making sand castles and scultpures out of mud and sticks (I still
              do) and the drive to build and create has never left me.
            </p>
            <p>
              My first career was in industrial design, that part of my story is
              long and contains all kinds of things including a BA in furniture
              and industrial design, emigrating to Canada and starting a
              furniture business with my father. It wasn’t until I was around 30
              that my coding journey started.
            </p>
          </div>
          <div className={classes.section_images}>
            <img src={sandCastle} alt="sand castle"></img>
            <img src={furniture} alt="furniture"></img>
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.section_paragraph}>
            <h3 className={classes.section_subtitle}>My road to Code</h3>
            <p>Sorry about the cheesy header, I couldn't resist!</p>
            <p>
              A friend of mine introduced me to the world of code via a few
              basic tutorials, when he was going through a bootcamp, he knew me
              well and thought that I might enjoy it.
            </p>
            <p>
              Turns out he was right, I became hooked. For a few years I hobby
              coded doing a lot of intro courses in several areas and languages
              including JavaScript, Java and Python.
            </p>
            <p>
              After it was clear coding was something I wanted to do more
              seriously I decided to take the plunge. I left my industrial
              design career to study web development and pursue a new career
              while looking after my young daughter.
            </p>
            <p>
              Since that point I have been studying hard, gaining several
              certifications and building my knowledge bit by bit. Working with
              mentors, local meetup groups and friends has enabled me to get to
              where I am now and I am excited to continue to grow and learn.
            </p>
          </div>
          <div className={classes.section_images}>
            <img src={computer} alt="computer with code"></img>
            <img src={road} alt="road"></img>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
