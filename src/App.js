import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Form from './components/ContactForm'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.cardsArr = [
      { title: "Features!", isVert: false},
      { title: "Games", isVert: true},
      // { title: "Pricing", numCards: 3, isVert: true},
      // { title: "Contact", numCards: 1, isVert: false},
    ]
  }
  

  render() {

    return (
      <div className="app-container">
        <Header sections={this.cardsArr.map(elem => elem.title)}/>
        <div className='body-container'>
          {this.cardsArr.map((elem, index) => {
            let { title,isVert} = elem;
            return (<Cards id={index} key={index} title={title} isVert={isVert}/>);
          })}
          <Form/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
