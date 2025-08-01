// src/components/Contacto.jsx
import React from 'react';

function Contacto({ contacto }) {
  return (
    <div>
      <p><strong>Nombre:</strong> {contacto.nombre}</p>
      <p><strong>Correo:</strong> {contacto.correo}</p>
      <p><strong>Teléfono:</strong> {contacto.telefono}</p>
    </div>
  );
}

export default Contacto;
