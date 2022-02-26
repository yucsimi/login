import React, { useState } from 'react';
import '../styles/Forulario.css'
import img from '../assets/y.png'
import ModalFormulario from './ModalFormulario';


const Formulario = () => {


    const [modal, setModal] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setModal(!modal)
    }

    return (




        <div className='row'>
            <div className='container'>

                <ModalFormulario modal={modal} handleSubmit={handleSubmit} />
                <form className='d-flex input '>

                    <img alt='imagenes' className='imagen' src={img} />

                    <h1>!Bienvenidos!</h1>
                    <h3>Complete el Siguente Formulario</h3>


                    <label>Nombre Completo</label>
                    <input type='text' placeholder='Tu nombre completo' />

                    <label>Pais</label>
                    <select >
                        <option value="" hidden disabled selected >Tu pais</option>
                    </select>


                    <label>Direccion</label>
                    <input type='text' placeholder='Tu direccion' />

                    <label>E-mail</label>
                    <input type='text' placeholder='Tu E-mail' autocomplete="off" />

                    <label>Contrasena</label>
                    <input type='password' placeholder='Contrasena' />

                    <label>Confirmacion de Contrasena</label>
                    <input type='password' placeholder='Contrasena' />


                    <button onClick={handleSubmit} type='submit' className='boton'>Enviar</button>
                </form>





            </div>


        </div>

    );
}

export default Formulario;