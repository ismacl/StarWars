import React from "react";
import { Link } from "react-router-dom";

const Peliculas = () =>{
    
    return<>
        <div>
            <h2>Trilogias de la saga Star Wars</h2>
            <ul>
                <li>
                    <Link to ="/TrilogiaOriginal">Trilogia Original</Link>
                </li>
                <li>
                    <Link to ="/TrilogiaPrecuelas">Trilogia de Precuelas</Link>
                </li>
            </ul>
        </div>
    </>
}

export default Peliculas;