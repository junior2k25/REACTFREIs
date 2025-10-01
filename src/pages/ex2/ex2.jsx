import { useState } from "react";
import "./Ex2.scss"

export default function Ex2() {
    const [kg, setKg] = useState(0)
    const [grama, setGrama] = useState(0)
    function converter(){
        setGrama(kg * 1000)
    }
    return(
        <div className="ex2">
            <h1>converter kg para grama</h1>
            <input value={kg} onChange={e => setKg(Number(e.target.value))}/>
            <button onClick={converter}>converter</button>
            <h2>{grama}</h2>
        </div>
    )
}