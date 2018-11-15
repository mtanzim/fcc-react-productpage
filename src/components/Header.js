import React from 'react';

const HeaderItems = ({ id, content, reactRef, clickScroll}) =>
  <a className='header-item nav-link' href={`#${id}`} onClick={(event) => clickScroll(event, reactRef)}><h2 id={id}>{content}</h2></a>

export default ({sections, clickScroll, reactRef}) => {

/*   function navClickToScroll (e, refElem) {
    e.preventDefault();
    clickScroll(refElem);
  } */
  
  return (
    <div id='header' className='header-container'>
      <nav id="nav-bar" className='nav-components'>
        {sections.map((item, index) =>
          <HeaderItems key={index} id={index} content={item} clickScroll={clickScroll} reactRef={reactRef[index]} />
        )}
      </nav>
      <div className='header-div' >
        <div className='header-title'>
          <img src={require('../images/logo.PNG')} className='header-logo' alt='logo' id='header-img'>
          </img>
          <h1 id='' className='header-title-text'>
            Trapstar Games
          </h1>
        </div>
      </div>

    </div>
  )

}