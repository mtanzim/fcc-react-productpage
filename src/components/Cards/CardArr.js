import React from 'react';

const featureCards = [
  (
    <h3><i className="far fa-dot-circle"></i> Excelent Games</h3>
  ),(
    <h3><i className="far fa-dot-circle"></i> Additctive!</h3>
  ),(
    <h3><i className="far fa-dot-circle"></i> Unbeatable false sense of progression!</h3>
  )
]

const gameCards = [
  (
    <div id="">
      <i className="fas fa-gamepad game-logo"></i>
      <h1>Blue Retribution</h1>
      <p>$139.99</p>
    </div>

  ),
  (
    <div>
      <i className="fas fa-gamepad game-logo"></i>
      <h1>Grand Theft POTATO</h1>
      <p>$139.99</p>
    </div>
  ),
  (
    <div>
      <i className="fas fa-gamepad game-logo"></i>
      <h1>GOAThunt</h1>
      <p>$139.99</p>
    </div>
  )
]

const demoCard = [
  (
    <div>
      <p>Video of Blue Retribution</p>
      <p>Video here</p>
    </div>

  ),
]





export default {
  "Features!": featureCards,
  "Games" : gameCards,
  "Demonstration": demoCard,
}