
import React, { useEffect, useState } from 'react';
import Formulario from './formulario';
import Contactoslista from './contactoslista';
import Buscarcontactos from './buscarcontactos';

function Agenda() {
  const [contactos, setContactos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('contactos')) || [];
    setContactos(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    const existe = contactos.some(c => c.correo === nuevo.correo);
    if (existe) return alert('El contacto ya existe');
    setContactos([...contactos, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos(contactos.filter(c => c.correo !== correo));
  };

  const filtrarContactos = (texto) => {
    setBusqueda(texto);
  };

  const contactosFiltrados = contactos.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Contactos</h1>
      <Buscarcontactos filtrar={filtrarContactos} />
      <Formulario agregarContacto={agregarContacto} />
      <Contactoslista contactos={contactosFiltrados} eliminarContacto={eliminarContacto} />
    </div>
  );
}

export default Agenda;
