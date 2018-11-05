import React from 'react';

const EachCard = ({id}) =>
  <div className='card'>
    Card {id}
  </div>


export default () => {

  // let numCards = 5;
  let cardsArr = Array(3).fill().map((e, i) => i + 1);

  return (
    <div>
      <h1>Cards here</h1>
      <div className='card-container'>
        {cardsArr.map(i =>
          <EachCard id={i}/>
        )}
        
      </div>
    </div>
  )
}