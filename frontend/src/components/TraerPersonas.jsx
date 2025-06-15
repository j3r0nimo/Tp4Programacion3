import React, {useState} from "react";
import ListaTarjetas from "./ListaTarjetas";
function TraerPersonas(){
    const [personas, setPersonas] = useState([]);
    const [mostrando, setMostrando] = useState(false)

    const TraerDatos=()=>{
        if (mostrando){
            setMostrando(false);
            setPersonas([])
        }
        else{
            fetch("http://localhost:3001/personas")
            .then(res => res.json())
            .then(data => {
            setPersonas(data);
            setMostrando(true);
            })
            .catch(err => console.error("error al traer personas: ",err));
        }
        
        
    }
    return (
        <div>
            <button className="boton" onClick={TraerDatos}>mostrar personas</button>
            {mostrando && <ListaTarjetas personas={personas}/>}
        </div>
        
    )
}
export default TraerPersonas;