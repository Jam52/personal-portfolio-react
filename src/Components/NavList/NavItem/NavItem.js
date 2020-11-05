import React from 'react';
import { NavLink } from 'react-router-dom';
import technicalIcon from './technicalSkills.svg';
import aboutIcon from './aboutMe.svg';
import contactIcon from './contactMe.svg';
import classes from './NavItem.module.scss';

const NavItem = (props) => {
    let pathName = '/';
    let icon;
    let delayClass;

    switch(props.link) {
        case 'about me':
            icon = aboutIcon;
            pathName = '/about';
            delayClass = classes.delayOne;
            break;
        case 'projects':
            icon = aboutIcon;
            pathName = '/projects';
            delayClass = classes.delayTwo;
             break;    
        case 'technical skills':
            icon = technicalIcon;
            pathName = '/technical_skills';
            delayClass = classes.delayThree;
            break;   
        default:
            icon = contactIcon;
            pathName = '/contact';
            delayClass = classes.delayFour;
            break;
    }

    let styles = props.isVisible ? [classes.container, delayClass].join(' ') :  [classes.hidden, classes.container, delayClass].join(' ');

    return (
            <NavLink to={pathName} className={styles} activeClassName={classes.active} onClick={props.click}>
                <img src={icon} alt={props.link}></img>
                <p>{props.link}</p>
            </NavLink>
    )
}

export default NavItem;