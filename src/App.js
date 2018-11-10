import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
        <div className='body-container'>
          <Cards title='Features!' numCards={2} isVert={false}/>
          <Cards title='How it Works' numCards={3} isVert={true}/>
          <Cards title='Contact' numCards={1} isVert={false}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
