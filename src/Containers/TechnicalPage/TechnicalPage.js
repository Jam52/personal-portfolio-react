import React from 'react';
import classes from './TechnicalPage.module.scss';
import EducationTile from './EducationTile/EducationTile';

const TechnicalPage = () => {
 return (
    <div className={classes.container}>
         <div className={classes.landing}>
            <h1 className={classes.landing_title}>Skills & Education_</h1>
           <p className={classes.landing_para}>Please see below for the areas of web development I have studied so far, as well as all certificates and education I have completed.</p>
        </div>
        <div className={classes.skills}>
                <div className={classes.skills_section}>
                    <h2>Front End</h2>
                    <img src={process.env.PUBLIC_URL + '/images/frontend.png'} alt="front end icon"/>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>BEM Standards</li>
                        <li>WCAG 2.0</li>

                    </ul>
                </div>
                <div className={[classes.skills_section, classes.skills_section___backEnd].join(' ')}>
                <h2>Back End</h2>
                    <img src={process.env.PUBLIC_URL + '/images/backEnd.png'} alt="backend icon"/>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className={[classes.skills_section, classes.skills_section___tools].join(' ')}>
                <h2>Tools</h2>
                    <img src={process.env.PUBLIC_URL + '/images/tools.png'} alt="tools icon"/>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Wordpack</li>
                        <li>Chrome Dev Tools</li>
                        <li>Lighthouse</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
            <h2 className={classes.subHeader}>Certificates & Education_</h2>
            <div className={classes.education}>
                <EducationTile 
                    title="FreeCodeCamp" 
                    description="JS Data Structures and Algorithums" 
                    href="https://www.freecodecamp.org/certification/fcc7637faad-66eb-4819-959b-167513323569/javascript-algorithms-and-data-structures"
                    educationImg='/images/freeCodeCampLogo.png'
                    educationAlt=""
                    certificateImg='/images/freecoaecamp_JSAlgorithmsAndDataStructures.png'/>
                <EducationTile 
                    title="FreeCodeCamp" 
                    description="Responsive Web Design" 
                    href="https://www.freecodecamp.org/certification/fcc7637faad-66eb-4819-959b-167513323569/responsive-web-design"
                    educationImg='/images/freeCodeCampLogo.png'
                    educationAlt=""
                    certificateImg='/images/freecoaecamp_ResponsiveWebDesign.png'/>
                    <EducationTile 
                    title="Udacity" 
                    description="Front End Web Development" 
                    href="https://graduation.udacity.com/confirm/ZPT6GESG"
                    educationImg='/images/udacityLogo.png'
                    educationAlt=""
                    certificateImg='/images/FrontEnd-Certificate.png'
                    background="#00b3e4"/>
            </div>
    </div>
 )
}

export default TechnicalPage;