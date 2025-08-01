import React from 'react';

function BuscadorContactos({ filtrar }) {
  return (
    <input
      type="text"
      placeholder="Buscar contacto"
      onChange={e => filtrar(e.target.value)}
    />
  );
}

export default BuscadorContactos;
