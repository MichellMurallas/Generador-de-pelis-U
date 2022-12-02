import React, { useState } from 'react'
import Buscador from './Buscador';
import Crear from './Crear';
import Listado from './Listado';
import "./Styles.css";


const Layuot = () => {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className='body'>
      <div className="layuot">
      <header className='header'>
        <div className="logo">
          <div className="play"></div>
        </div>
        
        <h1>Pelis</h1>
      </header>
      <nav className='nav'>
        <h2>Por favor crear una pelicula en la sesión que se encuentra a mano derecha</h2>
        {/* <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul> */}
      </nav>
      
      <section className='content'>
        <Listado listadoState={listadoState} setListadoState={setListadoState} />
      </section>

      <aside className='lateral'>
       <Buscador listadoState={listadoState} setListadoState={setListadoState} />
       <Crear setListadoState={setListadoState} />
      </aside>
      <footer className='footer'>
        &copy; Realizado por Miguel Quintero.
      </footer>
      </div>
    </div>
  )
}

export default Layuot
