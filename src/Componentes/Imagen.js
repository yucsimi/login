import React from 'react';
import '../styles/ImagenPrincipal.css'
import imag from '../assets/f.png'

const Imagen = () => {
    return (

        <div className=' principal'>

            <img alt='imag' src={imag} />

        </div>
    );
}

export default Imagen;