import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Form from './components/ContactForm'
import './App.css';
import VideoCard from './components/VideoCard';



class App extends Component {

  constructor(props) {
    super(props);

    this.cardsArr = [
      { title: "Features!", isVert: false, reactRef:React.createRef()},
      { title: "Games", isVert: true, reactRef: React.createRef()},
      // { title: "Demonstration", isVert: false, reactRef: React.createRef()},
      // { title: "Contact", numCards: 1, isVert: false},
    ];

    this.DemoTitle = "Demonstration";
    this.DemoRef = React.createRef();
    this.FormTitle = "Contact Us";
    this.FormRef = React.createRef();

    this.navLinksArr = [...this.cardsArr,
      { title: this.DemoTitle, reactRef: this.DemoRef},
      { title: this.FormTitle, reactRef: this.FormRef}]


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
        <Header clickScroll={this.scrollToMyRef} reactRef={this.navLinksArr.map(elem => elem.reactRef)} sections={this.navLinksArr.map(elem => elem.title)}/>
        <div className='body-container'>
          <div className='header-container '>
            <div className='header-div' >
              <div className='header-title'>
                <h1 id='' className='header-title-text'>
                  Trapstar Games
                </h1>
              </div>
            </div>
          </div>
          {this.cardsArr.map((elem, index) => {
            let { title,isVert} = elem;
            return (<Cards id={index} key={index} title={title} isVert={isVert} reactRef={elem.reactRef}/>);
          })}
          <VideoCard title={this.DemoTitle} reactRef={this.DemoRef}/>
          <Form title={this.FormTitle} reactRef={this.FormRef}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
