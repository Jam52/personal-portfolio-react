import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavList.module.scss'

const NavList = (props) => {
    let isVisible = props.isVisible;
    return (
        <div className={classes.container}>
            <NavItem isVisible={isVisible} link='about me' click={props.click}/>
            <NavItem isVisible={isVisible} link='projects'click={props.click}/>
            <NavItem isVisible={isVisible} link='technical skills'click={props.click}/>
            <NavItem isVisible={isVisible} link='contact me'click={props.click}/>
        </div>
    )
}

export default NavList;