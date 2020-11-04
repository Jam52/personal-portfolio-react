import React, { Component } from 'react';
import NavList from '../../Components/NavList/NavList';
import classes from './MobileNav.module.scss';
import crossIcon from './cross.svg'

class MobileNav extends Component {
    state = {
        navListIsVisbible: false
    }

    toggleNavList = () => {
        this.setState({navListIsVisbible: !this.state.navListIsVisbible})
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.menu} onClick={this.toggleNavList}>
                    <img src={crossIcon} alt=""></img>
                </div>
               
                <NavList isVisible={this.state.navListIsVisbible} click={this.toggleNavList}/>
            </div>
        )
    }


}

export default MobileNav;