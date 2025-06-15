import React from "react";
import TarjetaPersona from "./tarjetaPersona";

function ListaTarjetas({personas}) {
    return(
        <div className="Container-tarjeta">
            {personas.map(p=>(
                <TarjetaPersona key={p.id} persona={p}/>
            ))}
        </div>
    )
}
export default ListaTarjetas;