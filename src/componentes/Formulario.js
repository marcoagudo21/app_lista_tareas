import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
export const Formulario = ({tareas, setTareas}) => {
    const handleInput = (e) => {
        setInputTarea(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas,
        {id: uuidv4(),
        texto:inputTarea,
        completada: false}]);
        setInputTarea('')
    }
    const [inputTarea, setInputTarea] = useState('')
    return (
        <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
            <input type="text" className='formulario-tareas__input'
            placeholder='Escribe una tarea' 
            value={inputTarea}
            onChange={(e)=> handleInput(e)}/>
            <button 
                type="submit"
                className='formulario-tareas__btn'>
                    <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />
            </button>
        </form>
    )
}
