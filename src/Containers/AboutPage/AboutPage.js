import React, {useEffect} from 'react';
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
            behavior: 'smooth'
        })
    });

    return (
        
        <div>
            <div className={classes.landing}>
                <h1 className={classes.title}>About me_</h1>
                <div className={classes.landing_intro}>
                    <div className={classes.profile}>
                        <img src={profilePic} alt="jamie photograph"></img>
                    </div>
                    <p className={classes.landing_para}>Hi, thank you for checking out my portfolio site! I am an aspiring web developer, formally industrial designer, with a passion for building things. Please scroll down for a little more about me and my journey so far. 
                    </p>
                </div>
            </div>
            
            <div className={classes.section}>
                <div className={classes.section_paragraph} >
                    <h3 className={classes.section_subtitle}>Begin at the begining</h3>
                
                    <p>
                    Ive always been a builder, one of those kids obsessed with legos, making sand castles and scultpures out of mud and sticks (I still do) and the drive to build and create never left me.
                    </p>
                    <p>
                    My path to becoming a web developer is roundabout as I started with a 9 year career as an industrial designer after a BA degree in furniture and product design, that part of my story is long and contains all kinds of things like moving to canad and starting a furniture company with my father but it wasnt untill I was around 30 that my coding journey started.
                    </p>
                </div>
                <div className={classes.section_images}>
                    <img src={sandCastle} alt="sand castle"></img>
                    <img src={furniture} alt="furniture"></img>
                </div>
                
            </div>
            <div className={[classes.section, classes.section___dark].join(' ')}>
                <div className={classes.section_paragraph} >
                    <h3 className={classes.section_subtitle}>My road to Code</h3>
                    <p>
                        Sorry about the cheesy header, I couldnt resit! 
                    </p>
                    <p>
                    A friend of mine introduced me to the world of code via a few basic tutorials, when he was going through a bootcamp, he knew me well and thought that I might enjoy it.
                    </p>
                    <p>
                        Turns out he was right, I got hooked. For a few years I hobbie coded doing a lot of intro courses in several areas and languages including JavaScript, Java and Python. After a while my wife told to I should just git it a go and so I started lookign after our daughter full time while I studied... hard.
                    </p>
                    I went gained several certficationas and built my knoladge bit by bit, working with a few mentors, local meetup groups and friends has enabled me to get to where I am now.
                </div>
                <div className={classes.section_images}>
                    <img src={computer} alt="computer with code"></img>
                    <img src={road} alt="road"></img>
                </div>
               
            </div>
            
                
           
        </div>
    )
}

export default AboutPage;