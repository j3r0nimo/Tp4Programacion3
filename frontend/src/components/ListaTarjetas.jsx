import TarjetaPersona from './TarjetaPersona';
import '../styles/ListaTarjetas.css';

export default function ListaTarjetas({ personas }) {
    return(

        <div className="tarjetas-container">
            {personas.map(persona => (
              <TarjetaPersona key={persona.id} persona={persona} />  
            ))
            }
        </div>

    );
}