import { useState } from "react";
import './Inicio.scss'
import logo from '/logofre1 (2).png'
import { Link } from "react-router";


export default function Inicio() {
    return(
        <div className="cabecalho">
            <img src={logo}/>
            <h1>react FreiS</h1>
            <a>inicio</a>
            <a>sobre</a>

            <div className="cartao">
                <div className="card">
                <h1>Implementa js</h1>
                <p>desconto</p>
                <Link to={'/ex1'}>ex1</Link>

                <div className="card2">
                    <h1>coventer para grama</h1>
                    <p>converter kg para grama</p>
                    <Link to={'/ex2'}>ex2</Link>

                    <div className="card3">
                    <h1>Calcular o total de acai</h1>
                    <p>peq, medio, grad</p>
                    <Link to={'/ex3'}>ex3</Link>

                    <div className="card4">
                    <h1>descobri o tempo lido</h1>
                    <p>JavaScript</p>
                    <Link to={'/ex4'}>ex4</Link>

                    </div>

                    </div>
                </div>
                </div>
            </div>


        </div>
    )
}