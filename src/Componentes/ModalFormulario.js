import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import imagen from "../assets/d.png"
export default function ModalFormulario({ modal, handleSubmit }) {



    return (
        <Modal centered isOpen={modal}>
            <ModalBody className="text-center modalCustom">

                <img src={imagen} />
                <h2>!Registro Exitoso!</h2>
                <p> Gracias por registrarte, un email con los siguientes te llegara próximamente </p>
                <button onClick={handleSubmit} className='boton'>Enviar</button>

            </ModalBody>

        </Modal>
    )
}