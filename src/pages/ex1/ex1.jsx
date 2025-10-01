import { useState } from "react";
import "./Ex1.scss"

export default function Ex1() {
    const [numero, setNumero] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    function Adicionar() {
        let resultado = Number(num1) - Number(num2)
        setNumero(resultado)
    }

    return(
        <div className="ex1">
            <h1>Exercicio 1</h1>
            <label>numero</label>
            <input value={num1} onChange={e => setNum1(e.target.value)}/>
            <input value={num2} onChange={e => setNum2(e.target.value)}/>
            <button onClick={Adicionar}>soma</button>
            <h1>resultado<p>{numero}</p></h1>
        </div>
    )
}