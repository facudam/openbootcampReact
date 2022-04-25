import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Fgreeting = (props) => {

  const [age, setage] = useState(29);

  const birthday = () => {
     setage(age + 1);
  }

  return (
    <div>
        <h1>Hola! { props.name } desde componente funcional</h1>
          <h2>Tu edad es de: { age }</h2>
        <div>
            <button onClick={birthday}>
                cumplir años
            </button>
        </div>
    </div>
  )
}

Fgreeting.propTypes = {
    name: PropTypes.string
}

export default Fgreeting