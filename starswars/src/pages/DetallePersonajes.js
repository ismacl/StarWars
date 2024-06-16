import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import not_found from '../images/404.png';
import luke from '../images/Luke.jpg';
import c3po from '../images/c3po.jpg'
import r2d2 from '../images/r2d2.jpg'
import darth from '../images/darth.jpg'
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
    }else if (Nombre === "C-3PO") {
        image = c3po
    }
    else if (Nombre === "R2-D2") {
        image = r2d2
    }
    else if (Nombre === "Darth Vader") {
        image = darth
    } else {
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
    <br></br>
    <p>Año de nacimiento: {Nacimiento}</p>
    <p>Altura: {Altura}</p>
    <p>Peso: {Peso}</p>
    </div>
    </div>
    </>
}

export default DetallePersonajes;