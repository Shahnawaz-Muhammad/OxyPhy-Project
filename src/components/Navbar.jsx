import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import Modal from './Modal';

class Navbar extends Component {
  state = { clicked: false, isOpen: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  openModal = () => {
    this.setState({ isOpen: true });
    console.log('clicked modal');
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <nav className='NavbarItems'>
          <div className='navbar-logo'>
            <img src='images/logo.png' alt='logo' />
          </div>
          <div className='menu-icon' onClick={this.handleClick}>
            <i
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button onClick={this.openModal} className='btn-trial'>
            Start Free Trial
          </Button>
        </nav>
        <Modal open={isOpen} />
      </>
    );
  }
}

export default Navbar;
