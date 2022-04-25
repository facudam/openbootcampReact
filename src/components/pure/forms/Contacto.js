import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class'

const ContactoComponent = ({contacto}) => {
  return (
    <>
        <h3>
            Nombre: { contacto.nombre}
        </h3>
        <h3>
            Apellido: {contacto.apellido}
        </h3>
        <h3>
            E-mail: {contacto.email}
        </h3>
        <h3>Estado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </h3>
    </>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent