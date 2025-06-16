export async function TraerPersonas() {
    const res = await fetch('http://localhost:4000/personas');
    const data = await res.json();
    return data
}