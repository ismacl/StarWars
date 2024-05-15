import React, { useEffect, useState } from "react";
import axios from "axios";
import foto from "../images/originales.jpg"
import './trilogias.css'

const TrilogiaOriginal = () =>{
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        axios.get("https://www.swapi.tech/api/films/").then (response => {
            console.log(response.data.result)
            setPeliculas(response.data.result)})
    })

    return<>
    <div>
        <h2>Películas de la Trilogía Original</h2>
        <div className="peliculas">
                {peliculas.filter (objeto => {
                    if (objeto.properties.episode_id >= 4) {
                        return true
                    } else
                    return false
                }).map (objeto => {return <div className="titulo"> <img src={foto}></img><p>{objeto.properties.title}</p> </div>})
                
                }
        </div>    
    </div>
    </>
}

export default TrilogiaOriginal;