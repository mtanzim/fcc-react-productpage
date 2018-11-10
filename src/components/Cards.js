import React from 'react';

const EachCard = ({id, isVert}) =>


  <div className={!isVert ? 'card' : 'card-vert'}>
    Card {id}
  </div>


export default ({ title, numCards, isVert = false}) => {

  let cardsArr=[];
  for (let i=0; i<numCards; i++) {
    cardsArr.push(i);
  }

  return (
    <div>
      <h1 className='body-header-title'>{title}</h1>
      <div className={(!isVert ? `card-rows` : `card-columns`)+` card-container`}>
        {cardsArr.map(i =>
          <EachCard key= {i} id={i} isVert={isVert}/>
        )}
        
      </div>
    </div>
  )
}