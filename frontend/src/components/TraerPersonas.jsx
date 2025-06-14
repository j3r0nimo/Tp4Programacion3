import React, {useEffect, useState} from "react";
import ListaTarjetas from "./ListaTarjetas";
function TraerPersonas(){
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/personas")
            .then(res => res.json())
            .then(data => setPersonas(data))
            .catch(err => console.error("error al traer personas: ",err));
    }, []);
    return <ListaTarjetas personas={personas}/>
}
export default TraerPersonas;