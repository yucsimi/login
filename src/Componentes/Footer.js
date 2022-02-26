import React from 'react';
import img from '../assets/y.png'
import '../styles/footer.css'



const Footer = () => {
    return (

        <div className='col-md-12 m-auto d-flex foter'>

            <div className='col-md-3'>
                <img alt='imagen' src={img} />
            </div>
            <div className='col-md-3 text-center'>politica de privacidad</div>
            <div className='col-md-3 text-center'>Terminos y Condiciones</div>
            <div className='col-md-3 text-center'>2021</div>


        </div>
    );
}

export default Footer;