import React from 'react'
import ContactoComponent from '../pure/forms/Contacto'
import { Contacto } from '../../models/contacto.class'




const ContactoList = (props) => {

  const contactoDefault = new Contacto ('Facundo', 'Cáceres', 'facundo89caceres@gmail.com', true)

  return (
    <div>
        <h2>
            Contacto: 
        </h2>
        <ContactoComponent contacto={contactoDefault}/>
    </div>
  )
}



export default ContactoList;