import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import './styles.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (data) => {
    if (
      data.name.trim().length >= 3 &&
      data.favoritePlayer.length >= 6 &&
      !data.name.trim().startsWith(' ')
    ) {
      setFormData(data);
      setShowError(false);
    } else {
      setShowError(true);
      setFormData(null);
    }
  };

  return (
    <div className="app">
      <h1>Formulario de Jugador Favorito</h1>
      <Form onSubmit={handleSubmit} />
      {formData && <Card {...formData} />}
      {showError && (
        <div className="error">Por favor chequea que la información sea correcta</div>
      )}
    </div>
  );
}

export default App;
