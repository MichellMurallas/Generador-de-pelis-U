export const GuardarEnStorage = (clave, elemento)  =>{
  //Conseguir los elementos que ya tenemos en el LocalStorage.
  let elementos = JSON.parse(localStorage.getItem(clave));

  console.log(elementos);

  //Comprobar si es un Array.
  if(Array.isArray(elementos)){
    //Añadir un elemento nuevo dentro del Array.
    elementos.push(elemento);
  }else{
    //crear un array con la nueva peli
    elementos = [elemento];
  }

  //Guardar en el LocalStorage.
  localStorage.setItem(clave, JSON.stringify(elementos));

  //Devolver Objeto Guardado. 
  return elemento;
}
