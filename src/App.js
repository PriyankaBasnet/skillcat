import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
       <Header />
        <div className="banner-container">
         <img className="banner" src="https://catskillselfstorage.com/wp-content/uploads/2015/12/units.png" />
         <div className="banner-overlay">
           <p className="banner-overlay-text">safe - secure - Affordable</p>
           <p className="banner-overlay-text">self storage</p>
           <div className="button-wrapper">   
             <button className="button button--green" type="button">reserve your unit</button>
             <button className="button button--orange" type="button">view unit rates</button>
           </div>       
         </div>
        </div>
       <Footer />
      </div>
      </div>
    );
  }
}

export default App;
