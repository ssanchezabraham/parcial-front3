import React from 'react';
import './styles.css';

function Card({ name, favoritePlayer }) {
  return (
    <div className="card">
      <p>Hola {name}!</p>
      <p>Sabemos que tu jugador favorito es:</p>
      <p>{favoritePlayer}</p>
    </div>
  );
}

export default Card;
