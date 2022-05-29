import axios from "axios"
import { useState } from "react"
import './index.css';


export default function Index() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');


    async function verificarCorPrimaria(){

      const resp = await axios.get('http://localhost:5000/semaforo/' + cor);
      if (resp.data.semaforo === "pode passar") {
          setResposta('Atravesse!')
      }
      else if (resp.data.semaforo === "aguarde") {
          setResposta ('Espere!')
      }
      else(
          setResposta('Cor invalida')
      )
    }
    
     return (
        <main>
            <h1> Atravessar a Rua </h1>


            <div>
               Cor: <input type ='text' value={cor} onChange={e => setCor(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarCorPrimaria}> Verificar </button>
            </div>
            <div>
                 Posso atravessar a rua? 
            </div>
            <div className="resposta">Resposta: <span className="verde">{resposta}</span></div>
        </main>


     )
}