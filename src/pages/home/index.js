
import { Link } from "react-router-dom";

export default function Index(){
    return (
        <main>

        <h1> Home </h1>

        <ul>
            <li><Link to='/atravessarRua'> Atravessar a Rua </Link></li>
            <li><Link to='/diaSemana'> Dia Semana </Link></li>
            <li><Link to='/fatorial'> Fatorial </Link></li>
            <li><Link to='/numeroPar'> Número Par </Link></li>
        </ul>

        </main>
    )
}