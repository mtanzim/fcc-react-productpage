import React from "react";


export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      text:''
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  submitChange = (event) => {
    event.preventDefault();
    console.log(`Submitted ${this.state.text}`);
    this.setState({ text: '' });
    fetch('https://www.freecodecamp.com/email-submit', {
      method: 'POST',
      body: this.state.text
    })
      .then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

  }

  render() {
    return (
      <div className='form-container'>
        <form name="formA" id="form" action="true">
          <h1 className='body-header-title'>Join the Mailing List!</h1>
          <div className="form-input-container">
            <input id="email" name="email" type="email" value={this.state.text} className='app-form' placeholder="rockstar@trapper.com" onChange={this.handleChange}>
            </input>
            <input id="submit" type="submit" onClick={this.submitChange}></input>
            {/* <button id="submit" className='app-form-button' onClick={this.submitChange}>Send</button> */}
          </div>
        </form>
      </div>

    )
  }
}