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
      { title: "Features!", isVert: false, reactRef:React.createRef()},
      { title: "Games", isVert: true, reactRef: React.createRef()},
      { title: "Demonstration", isVert: false, reactRef: React.createRef()},
      // { title: "Contact", numCards: 1, isVert: false},
    ];


  }

  scrollToMyRef = (e, curRef) => {
    // console.log('Scrolling!');
    // console.log(curRef);
    e.preventDefault();
    window.scrollTo({
      top: curRef.current.offsetTop - 20,
      behavior: "auto"
    })
  }
  

  render() {

    return (
      <div className="app-container">
        <Header clickScroll={this.scrollToMyRef} reactRef={this.cardsArr.map(elem => elem.reactRef)} sections={this.cardsArr.map(elem => elem.title)}/>
        <div className='body-container'>
          {this.cardsArr.map((elem, index) => {
            let { title,isVert} = elem;
            return (<Cards id={index} key={index} title={title} isVert={isVert} reactRef={elem.reactRef}/>);
          })}
          <Form/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
