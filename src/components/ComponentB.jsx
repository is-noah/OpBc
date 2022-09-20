import React , {useState} from "react";
import PropTypes from "prop-types";
import { Contact } from "./contact.class";

const ComponentB = ({ contact }) => {
    const [STATUS, setSTATUS] = useState(true)
    const clickConect = () =>{
        setSTATUS(
            STATUS === false
        )
    }
  return (
    <div>
      <h1> Contacto: </h1>
      <h2> Nombre : {contact.name} </h2>
      <h2> Apellido : {contact.lastName} </h2>
      <h2> email : {contact.email}</h2>
      <h2> Conectado : {STATUS ? 'Contacto En Línea' : 'Contacto No Disponible'} </h2>

      <button onClick={clickConect}> CLICK ME! </button>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
