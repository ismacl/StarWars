import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import not_found from '../images/404.png';
import luke from '../images/Luke.jpg';
import './DetallePersonaje.css';

const DetallePersonajes = () => {
    const [Nombre, setNombre] = useState()
    const [Nacimiento, setNacimiento] = useState()
    const [Altura, setAltura] = useState()
    const [Peso, setPeso] = useState()
    const [error, setError] = useState()
    const params = useParams();

    useEffect(() => {
        const personajeId = params.idPersonaje
    if (!Number.isInteger(Number(personajeId))) {
        setError("ID de personaje no valido")
    }else {
        console.log (personajeId)
        axios.get("https://www.swapi.tech/api/people/" + personajeId).then (response => {
            console.log(response.data.result)
        setNombre(response.data.result.properties.name)
        setNacimiento(response.data.result.properties.birth_year)
        setAltura(response.data.result.properties.height)
        setPeso(response.data.result.properties.mass)
        }).catch(() => {
            setError("No se encontro el personaje que buscas")
        })
        // Controlar los errores en el axios
    }},[])

    let image;
    if (Nombre === "Luke Skywalker") {
        image = luke
    }else {
        image = not_found
    }

    return <>
    <div className="error">
    <h1>{error}</h1>
    </div>
    <div className="personaje">
    <div className="foto">
    <img src={image} />
    </div>
    <div className="datos">
    <h3>{Nombre}</h3>
    <p>Año de nacimiento: {Nacimiento}</p>
    <p>Altura: {Altura}</p>
    <p>Peso: {Peso}</p>
    </div>
    </div>
    </>
}

export default DetallePersonajes;