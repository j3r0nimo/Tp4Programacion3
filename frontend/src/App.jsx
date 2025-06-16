import { useEffect, useState } from "react";
import { TraerPersonas } from './api/personasService';
import ListaTarjetas from './components/ListaTarjetas';
import './styles/App.css';

function App() {
    const [personas, setPersonas] = useState([]);

    // Array VACÍO - se ejecuta SOLO UNA VEZ (al montar)
    useEffect(() => {
        TraerPersonas().then(setPersonas);
    }, []);

    return (
        <div className="app-container">
            <h1 className="titulo">Listado de Personas</h1>
            <ListaTarjetas personas={personas} />            
        </div>
    );
}

export default App;