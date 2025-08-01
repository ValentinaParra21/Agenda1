import React, { useState } from 'react';
import './Formulario.css'; 

function Formulario({ agregarContacto }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const validarCorreo = (correo) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !telefono) return alert('Todos los campos son obligatorios');
    if (!validarCorreo(correo)) return alert('Correo inválido');

    agregarContacto({ nombre, correo, telefono });
    setNombre('');
    setCorreo('');
    setTelefono('');
  };

  return (
    <div className="form-container">
      <h2>Agregar Contacto</h2>
      <p className="subtitle">Por favor, completa los campos</p>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Su nombre completo"
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="uncorrreoelectronico@correo.com"
        />

        <label>Teléfono</label>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="0000000000"
        />

        <div className="button-group">
          <button type="button" className="cancel-button">Cancelar</button>
          <button
            type="submit"
            className="submit-button"
            disabled={!nombre || !correo || !telefono || !validarCorreo(correo)}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
