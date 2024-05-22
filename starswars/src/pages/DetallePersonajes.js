import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import not_found from '../images/404.png'
import luke from '../images/Luke.jpg'

const DetallePersonajes = () => {
    const [Nombre, setNombre] = useState([])
    const params = useParams();

    useEffect(() => {
        const personajeId = params.idPersonaje
        console.log (personajeId)
        axios.get("https://www.swapi.tech/api/people/" + personajeId).then (response => {
            console.log(response.data.result)
        setNombre(response.data.result.properties.name)
        })
    },[])

    let image;
    if (Nombre === "Luke Skywalker") {
        image = luke
    }else {
        image = not_found
    }

    return <>
    <h3>{Nombre}</h3>
    <img src={image} />
    </>
}

export default DetallePersonajes;