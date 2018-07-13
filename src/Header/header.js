import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="header-wrapper">
          <div className="top-bar">
           <button type="button" className="contact-button">contact</button>
           <span className="address">5877 Cauterskill Road Catskill, NY 12414</span>
           <span className="email-address">catskillselfstorage@gmail.com</span>
           <span className="contact-number">518-943-3003</span>
          </div>
          <div className="header">
           <img className="logo" src="https://catskillselfstorage.com/wp-content/uploads/2016/06/Catskill-Self-Storage-Logo-01-1.png"/>
           <ul class="menu-wrapper">
            <li class="menu-items">view rates</li>
            <li class="menu-items">reserve your unit</li>
            <li class="menu-items">contact us</li>
            <li class="menu-items">payment</li>
           </ul>
          </div>  
        </header>
    );
  }
}

export default Header;
