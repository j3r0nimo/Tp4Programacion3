import '../styles/TarjetaPersona.css';

export default function ({ persona }) {
    return (
        
        <div className="card">
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p>Edad: {persona.edad}</p>
            <p>Email: {persona.email}</p>
        </div>

    );
}