// src/components/ListaContactos.jsx
import React from 'react';

function ListaContactos({ contactos, eliminarContacto }) {
  return (
    <ul>
      {contactos.map(contacto => (
        <li key={contacto.correo}>
          {contacto.nombre} - {contacto.correo} - {contacto.telefono}
          <button onClick={() => eliminarContacto(contacto.correo)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaContactos;
