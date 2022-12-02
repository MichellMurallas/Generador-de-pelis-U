import React, { useState } from 'react'
import { GuardarEnStorage } from './Helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir Pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""});

  const {titulo, descripcion} = peliState;

  
  const conseguirDatosForm = e =>{
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
   
    // Crear estado de la pelicula a guardar.

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }
    //Guardar estado
    setPeliState(peli);

    //Actualizar el listado del estado principal
    setListadoState(elementos =>{
      return [...elementos, peli];
    })
  
    //Guardar en el almacenamiento Local:
    GuardarEnStorage("pelis", peli);
  }

  

  return (
    <div className="add">
      <h3 className='title'>{tituloComponente}</h3>

      <strong>
      {(titulo && descripcion) && "Has creado la Pelicula: " + peliState.titulo}
      </strong>

    <form onSubmit={conseguirDatosForm} >
      <input type="text"
             id='titulo'
             name='titulo' 
             placeholder='Titulo' />

      <textarea 
                name="descripcion" 
                id="descripcion" 
                placeholder='Descripción'></textarea>

      <input type="submit"
             id="save"
             value="Guardar" />
    </form>
</div>
  )
}

export default Crear;
