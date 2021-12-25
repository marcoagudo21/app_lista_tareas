import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
export const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {
    const toggleCompletadas = () =>{
        setMostrarCompletadas(!mostrarCompletadas);
    }
    return (
        <header className='header'>
            <h1 className="header__titulo">Lista de tareas</h1>
            {mostrarCompletadas ?
                <button className="header__boton"
                        onClick={()=>toggleCompletadas()}
                >
                    No mostrar tareas completadas <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
                </button>
                :
                <button className="header__boton"
                        onClick={()=>toggleCompletadas()}>
                    Mostrar tareas completadas <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
                </button>}

        </header>
    )
}
