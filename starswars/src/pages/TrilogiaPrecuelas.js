import axios from "axios";
import React, { useEffect, useState } from "react";
import foto from "../images/precuelas.jpg"
import './trilogias.css'
import { Link } from "react-router-dom";

const TrilogiaPrecuelas = () =>{
    const [peliculas, setPeliculas] = useState([])

    useEffect (() => {
        axios.get("https://www.swapi.tech/api/films/").then (response => {
            console.log(response.data.result)
            setPeliculas(response.data.result)})
    })

    return<>
    <div>
        <h2>Películas de las Precuelas</h2>
        <div className="peliculas">
            {peliculas.filter (objeto => {
                if (objeto.properties.episode_id < 4) {
                    return true
                } else
                return false
            }).map (objeto => {return <Link to={objeto.uid}> <div className="titulo"> <img src={foto}></img><p>{objeto.properties.title}</p> </div> </Link>})
            
            }
        </div>
    </div>
    </>
}

export default TrilogiaPrecuelas;