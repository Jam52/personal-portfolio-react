import React, { useEffect } from 'react';
import classes from './TechnicalPage.module.scss';
import EducationTile from './EducationTile/EducationTile';

const TechnicalPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    });

 return (
    <div className={classes.container}>
         <div className={classes.landing}>
            <h1 className={classes.landing_title}>Skills & Education_</h1>
        </div>
        <p className={[classes.para, classes.para___dark].join(' ')}>Below is the ever growing list of web development technology and tools I have been studying and working with.</p>
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
            <div className={classes.education}>
                <h2 className={classes.subHeader}>Certificates & Education_</h2>
                <p className={classes.para}>After my early education I completed a BA-hons degree in furniture and industrial design. During my re-training in web development alongside many (many) courses and sources of information I have completed several certificates so far.</p>
                <div className={classes.education_cards}>
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
            
    </div>
 )
}

export default TechnicalPage;