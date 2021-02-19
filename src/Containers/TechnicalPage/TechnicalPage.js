import React, { useEffect } from 'react';
import classes from './TechnicalPage.module.scss';
import EducationTile from './EducationTile/EducationTile';
import Header from '../../Components/Header/Header';
import FadeInTransition from '../../Components/FadeInTransition/FadeInTransition';
import SkillCard from '../../Components/SkillsCard/SkillsCard';

const TechnicalPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <div>
      <Header
        text="Skills"
        icon={process.env.PUBLIC_URL + '/images/technicalSkills.svg'}
      />
      <FadeInTransition>
        <main className={`${classes.container} container control-flow-vert`}>
          <div className="split">
            <SkillCard
              header="Front End"
              technology={[
                'HTML5',
                'CSS3',
                'SCSS',
                'JavaScript',
                'React',
                'Redux',
                'BEM Standards',
                'WCAG',
              ]}
            />
            <SkillCard
              header="Back End"
              technology={['Node', 'Express', 'Firebase', 'PostgreSQL']}
            />
            <SkillCard
              header="Tools"
              technology={[
                'Github',
                'Webpack',
                'Chrome Dev Tools',
                'Lighthouse',
                'Postman',
              ]}
            />
          </div>
          <div className={classes.education}>
            <h2 className={classes.subHeader}>Certificates_</h2>

            <div className={classes.education_cards}>
              <EducationTile
                title="Udacity"
                description="Front End Web Development"
                href="https://graduation.udacity.com/confirm/ZPT6GESG"
                educationImg="/images/udacityLogo.png"
                educationAlt=""
                certificateImg="/images/FrontEnd-Certificate.png"
                background="#00b3e4"
              />
              <EducationTile
                title="FreeCodeCamp"
                description="JS Data Structures and Algorithums"
                href="https://www.freecodecamp.org/certification/fcc7637faad-66eb-4819-959b-167513323569/javascript-algorithms-and-data-structures"
                educationImg="/images/freeCodeCampLogo.png"
                educationAlt=""
                certificateImg="/images/freecoaecamp_JSAlgorithmsAndDataStructures.png"
              />
              <EducationTile
                title="FreeCodeCamp"
                description="Responsive Web Design"
                href="https://www.freecodecamp.org/certification/fcc7637faad-66eb-4819-959b-167513323569/responsive-web-design"
                educationImg="/images/freeCodeCampLogo.png"
                educationAlt=""
                certificateImg="/images/freecoaecamp_ResponsiveWebDesign.png"
              />

              <EducationTile
                title="FreeCodeCamp"
                description="Front End Libraries"
                href="https://www.freecodecamp.org/certification/fcc7637faad-66eb-4819-959b-167513323569/front-end-libraries"
                educationImg="/images/freeCodeCampLogo.png"
                educationAlt=""
                certificateImg="/images/freecoaecamp_ResponsiveWebDesign.png"
              />
            </div>
          </div>
        </main>
      </FadeInTransition>
    </div>
  );
};

export default TechnicalPage;
