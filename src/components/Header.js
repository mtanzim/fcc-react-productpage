import React from 'react';

const HeaderItems = ({id, content}) =>
  <a href="#"><h2 className='header-item nav-link' id={id}>{content}</h2></a>

export default ({sections}) =>
  <div className='header-container'>
    <nav id="nav-bar" className='nav-components'>
      {sections.map((item, index) =>
        <HeaderItems key={index} id={index} content={item} />
      )}
    </nav>
    <div className='header-div' id='header'>
      <div className='header-title'>
        <img src={require('../images/logo.PNG')} className='header-logo' alt='logo' id='header-img'>
        </img>
        <h1 id='' className='header-title-text'>
          Trapstar Games
        </h1>
      </div>
    </div>

  </div>
