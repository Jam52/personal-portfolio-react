import React from 'react';
import NavList from '../../Components/NavList/NavList';
import classes from './MainNav.module.scss';

const MainNav = () => {

    return (
        <div className={classes.container}>
             <NavList isVisible={true}/>
        </div>
       
    )
}

export default MainNav;