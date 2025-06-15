import React from "react";
import "../App.css"
function TarjetaPersona({persona}){
    return(
        <div className="Tarjeta">
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p>Edad: {persona.edad} año/s</p>
            <p>Email: {persona.email}</p>
        </div>
    )
}
export default TarjetaPersona;