import React from 'react';
import CardObj from "./Cards/CardArr";

const EachCard = ({id, isVert, content}) =>


  <div className={!isVert ? 'card' : 'card-vert'}>
    {content}
  </div>


export default ({ title, isVert}) => {

  let content = CardObj[title];

  return (
    <div>
      <h1 className='body-header-title'>{title}</h1>
      <div className={(!isVert ? `card-rows` : `card-columns`)+` card-container`}>
        {content.map( (item, i) =>
          <EachCard key={i} id={i} isVert={isVert} content={item}/>
        )}
        
      </div>
    </div>
  )
}