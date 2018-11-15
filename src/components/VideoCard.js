import React from 'react';

export default ({title, reactRef}) =>
  <div ref={reactRef} className='video-container-card'>
    <h2 className='body-header-title'>{title}</h2>
    <video id='video' className='video' controls>
      <source src="movie.mp4" type="video/mp4"></source>
      <source src="movie.ogg" type="video/ogg"></source>
      Your browser does not support the video tag.
    </video>
  </div>;