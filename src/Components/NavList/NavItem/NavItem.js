import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss';

const NavItem = (props) => {
  let pathName = '/';
  let icon = process.env.PUBLIC_URL;
  let delayClass;

  switch (props.link) {
    case 'about me':
      icon = icon + '/images/aboutMe.svg';
      pathName = '/about';
      delayClass = classes.delayOne;
      break;
    case 'projects':
      icon = icon + '/images/projects.svg';
      pathName = '/projects';
      delayClass = classes.delayTwo;
      break;
    case 'skills':
      icon = icon + '/images/technicalSkills.svg';
      pathName = '/skills';
      delayClass = classes.delayThree;
      break;
    default:
      icon = icon + '/images/contactMe.svg';
      pathName = '/contact';
      delayClass = classes.delayFour;
      break;
  }

  let styles = props.isVisible
    ? [classes.container, delayClass].join(' ')
    : [classes.hidden, classes.container, delayClass].join(' ');

  return (
    <NavLink
      to={pathName}
      className={`flow ${styles}`}
      activeClassName={classes.active}
      onClick={props.click}
    >
      <img src={icon} alt={props.link}></img>
      <p>{props.link}</p>
    </NavLink>
  );
};

export default NavItem;
