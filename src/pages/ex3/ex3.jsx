import {useState} from 'react'
import './Ex3.scss'

export default function Ex3() {
    const [peq, setPeq] = useState(0)
    const [med, setMed] = useState(0)
    const [gra, setGra] = useState(0)
    const [total, setTotal] = useState(0)

    function calcular(){
        let valorTotal = (peq * 13.50) + (med * 15.00) + (gra * 17.50)
        setTotal(valorTotal)
    }

    return(
        <div className="ex3">
            <h1>Calcular o total do acai</h1>
            <label>pequeno</label>
            <input value={peq} onChange={e => setPeq(Number(e.target.value))}/>

            <label>medio</label>
            <input value={med} onChange={e => setMed(Number(e.target.value))}/>

            <label>grande</label>
            <input value={gra} onChange={e => setGra(Number(e.target.value))}/>
            
            <button onClick={calcular}>calcular</button>
            <h2> {total}</h2>
        </div>
    )
}