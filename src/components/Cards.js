import React from 'react';

const EachCard = ({id}) =>
  <p>Card {id}</p>


export default () => 
  <div className='card-container'>
    <h1>Cards here</h1>
    <EachCard id={0}/>
  </div>