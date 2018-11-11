import React from "react";


export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      text:'Please enter your email address!'
    }
  }

  handleChange = (e) => {
    
  }

  submitChange = (e) => {

  }

  render() {
    return (
      <div className='form-container'>
        <h1 className='body-header-title'>Join the Mailing List!</h1>
        <div className="form-input-container">
          <input className='app-form' placeholder="rockstar@trapper.com"onChange={this.handleChange}></input>
          <button className='app-form-button' onClick={this.submitChange}>Send</button>
        </div>
      </div>

    )
  }
}