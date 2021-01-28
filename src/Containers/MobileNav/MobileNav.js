import React, { Component } from 'react';
import NavList from '../../Components/NavList/NavList';
import classes from './MobileNav.module.scss';

class MobileNav extends Component {
  state = {
    navListIsVisbible: false,
  };

  toggleNavList = () => {
    this.setState({ navListIsVisbible: !this.state.navListIsVisbible });
  };

  render() {
    let menuClass = this.state.navListIsVisbible
      ? `${classes.menu} ${classes.open}`
      : classes.menu;
    return (
      <div className={classes.container}>
        <div className={classes.menuContainer} onClick={this.toggleNavList}>
          <div className={menuClass}>
            <div />
            <div />
            <div />
          </div>
        </div>
        <NavList
          isVisible={this.state.navListIsVisbible}
          click={this.toggleNavList}
        />
      </div>
    );
  }
}

export default MobileNav;
