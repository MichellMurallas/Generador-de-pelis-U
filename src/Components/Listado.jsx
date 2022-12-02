import React, { useEffect, useState } from 'react'
import Editar from './Editar';
import "./Styles.css";

const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    // conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPelicula = (id) =>{

    //Conseguir peliculas Almacenadas.
    let pelis_almacenadas = conseguirPeliculas();

    // filtrar peliculas para eliminar del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //Actualizar estado del listado.
    setListadoState(nuevo_array_pelis);

    //Actualizar los datos en el localStorage.
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  }


  return (
      <>
      {listadoState != null ?  listadoState.map(peli =>{
        
        return(

          <article className='peli-item' key={peli.id}>
          <h3 className='title'>{peli.titulo}</h3>
          <p className='description'>{peli.descripcion}</p>

          <button className='edit' onClick={() =>{setEditar(peli.id);
          }}>Editar</button>

          <button className='delete' onClick={() => borrarPelicula(peli.id)}>Borrar</button>

          {editar === peli.id && (
            <Editar peli={peli}
                    conseguirPeliculas = {conseguirPeliculas}
                    setEditar = {setEditar}
                    setListadoState ={setListadoState}/>
          )}
        </article>
        );
      })
      : <h2>No hay peliculas para mostrar</h2>
    }
      
      </>
  )
}

export default Listado;
