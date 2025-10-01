import { useState } from "react";
import "./Ex4.scss"

export default function ex4() {
    const [livro, setLivro] = useState()
    const [tempo, setTempo] = useState(0)
    const [segundos, setSegundos] = useState(0)

    function calcular(){
        let totalSegundos = tempo * segundos /3600
        setSegundos(totalSegundos)
    }
    return(
        <div className="ex4">
            <h1>Calcular o tempo que um livro será lido</h1>
            <label>nome do livro</label>
            <input value={livro} onChange={e => setLivro(e.target.value)}/>
            <label>total de paginas</label>
            <input value={tempo} onChange={e => setTempo(Number(e.target.value))}/>
            <label>tempo em segundos por pagina</label>
            <input value={segundos} onChange={e => setSegundos(Number(e.target.value))}/>

            <button onClick={calcular}>calcular</button>
            <h2>{livro}{segundos}</h2>
        </div>
    ) 


}