import React from "react";

function TarjetaPersona({persona}){
    return(
        <div>
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p>Edad: {persona.edad} año/s</p>
            <p>Email: {persona.email}</p>
        </div>
    )
}
export default TarjetaPersona;