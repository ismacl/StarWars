import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import not_found from '../images/404.png';
import nueva_esperanza from '../images/nueva_esperanza.jpg'
import './DetallePeliculas.css';

const DetallePersonajes = () => {
    const [Nombre, setNombre] = useState()
    const [Estreno, setEstreno] = useState()
    const [Director, setDirector] = useState()
    const [error, setError] = useState()
    const params = useParams();

    useEffect(() => {
        const peliculasId = params.idPeliculas
    if (!Number.isInteger(Number(peliculasId))) {
        setError("ID de peliculas no valido")
    }else {
        console.log (peliculasId)
        axios.get("https://www.swapi.tech/api/films/" + peliculasId).then (response => {
            console.log(response.data.result)
        setNombre(response.data.result.properties.title)
        setEstreno(response.data.result.properties.release_date)
        setDirector(response.data.result.properties.director)
        }).catch(() => {
            setError("No se encontro la pelicula que buscas")
        })
        // Controlar los errores en el axios
    }},[])

    let image;
    if (Nombre === "A New Hope") {
        image = nueva_esperanza
    }else {
        image = not_found
    }

    return <>
    <div className="error">
    <h1>{error}</h1>
    </div>
    <div className="pelicula">
    <div className="foto">
    <img src={image} />
    </div>
    <div className="datos">
    <h3>{Nombre}</h3>
    <p>Fecha de estreno: {Estreno}</p>
    <p>Director: {Director}</p>
    </div>
    </div>
    </>
}

export default DetallePersonajes;