import React, { useEffect, useState } from 'react'
import './App.css';
import { Formulario } from './componentes/Formulario';
import { Header } from './componentes/Header';
import { ListaTareas } from './componentes/ListaTareas';

const App = () => {
  // Obtenmos las tareas guadardadas de localstorage.
  const tareasGuardadas = localStorage.getItem('tareas') 
  ?
  JSON.parse(localStorage.getItem('tareas')) 
  :
  [];
  // Establecemos el estado de las tareas.
  const [tareas, setTareas] = useState(tareasGuardadas);
  // Guardando el estado dentro de localstorage.
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas) );
    
  }, [tareas])
  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null.
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  };
  // El estado de mostrarCompletadas.
  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());

  }, [mostrarCompletadas])
  return (
    <div className='contenedor'>
      <Header 
      mostrarCompletadas={mostrarCompletadas}
      setMostrarCompletadas={setMostrarCompletadas} />
      <Formulario tareas = {tareas} setTareas={setTareas} />
      <ListaTareas
       tareas={tareas}
      setTareas={setTareas}
      mostrarCompletadas = {mostrarCompletadas}  />
    </div>
  );
}

export default App;
