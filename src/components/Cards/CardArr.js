import React from 'react';

const featureCards = [
  (
    <h3><i class="far fa-dot-circle"></i> Excelent Games</h3>
  ),(
    <h3><i class="far fa-dot-circle"></i> Additctive!</h3>
  ),(
    <h3><i class="far fa-dot-circle"></i> Unbeatable false sense of progression!</h3>
  )
]

const gameCards = [
  (
    <div>
      <i class="fas fa-gamepad game-logo"></i>
      <h1>Blue Retribution</h1>
      <p>$139.99</p>
    </div>

  ),
  (
    <div>
      <i class="fas fa-gamepad game-logo"></i>
      <h1>Grand Theft POTATO</h1>
      <p>$139.99</p>
    </div>
  ),
  (
    <div>
      <i class="fas fa-gamepad game-logo"></i>
      <h1>GOAThunt</h1>
      <p>$139.99</p>
    </div>
  )
]





export default {
  "Features!": featureCards,
  "Games" : gameCards,
}