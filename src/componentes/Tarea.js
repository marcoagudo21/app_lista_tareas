import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
export const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const { id, texto } = tarea
    const [editandoTarea, setEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(texto)
    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea)
        setEditandoTarea(false);
    }
    const handleInput = (e) => {
        cambiarNuevaTarea(e.target.value)
    }
    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon
                icon={tarea.completada ?
                faCheckSquare : faSquare}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={()=> {
                    toggleCompletada(tarea.id)
                }}
            />
            <div className='lista-tareas__texto'>
                {editandoTarea ?
                <form action='' className='formulario-editar-tarea'
                onSubmit={handleSubmit}
                >
                    <input type="text"
                    className='formulario-editar-tarea__input' value={nuevaTarea}
                    onChange={(e)=> handleInput(e)}/>
                    <button type="submit" 
                    className='formulario-editar-tarea__btn'
                    
                    >Actualizar
                    </button>
                </form>
                :
                texto}
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={()=> setEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={()=>borrarTarea(tarea.id)}
                />
            </div>
        </li>
    )
}
