import React, { useState } from 'react';
import './styles.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [favoritePlayer, setFavoritePlayer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, favoritePlayer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresa tu nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Ingresa tu jugador de fútbol favorito:
        <input
          type="text"
          value={favoritePlayer}
          onChange={(e) => setFavoritePlayer(e.target.value)}
        />
      </label>
      <button type="submit">ENVIAR</button>
    </form>
  );
}

export default Form;