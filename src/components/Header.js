import React from 'react';
import image from '../images/logo.PNG'


const HeaderItems = ({ id, content, reactRef, clickScroll}) =>
  <a className='nav-link' href={`#${id}`} onClick={(event) => clickScroll(event, reactRef)}><p id={id}>{content}</p></a>

export default ({sections, clickScroll, reactRef}) =>
  <div id='header'>
    <nav id="nav-bar" className='nav-components sticky'>
      <img src={image} className='header-logo' alt='logo' id='header-img'>
      </img>
      {sections.map((item, index) =>
        <HeaderItems key={index} id={index} content={item} clickScroll={clickScroll} reactRef={reactRef[index]} />
      )}
    </nav>
  </div>;