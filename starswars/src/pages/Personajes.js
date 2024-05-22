import axios from "axios"
import { useEffect, useState } from "react"
import './personajes.css';
import foto from '../images/star_wars_personajes.jpg'
import { Link } from "react-router-dom";

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])
    const [nextPagina, setNextPagina] = useState(null)
    const [returnPagina, setReturnPagina] = useState(null)

    const siguiente = () => {
        axios.get(nextPagina).then (response => {
            console.log(response.data.results)
        setPersonajes(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
    })
        
    }

    const anterior = () => {
        axios.get(returnPagina).then (response => {
            console.log(response.data.results)
        setPersonajes(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
        })
    }

    useEffect(() => {
        axios.get("https://www.swapi.tech/api/people/").then (response => {
            console.log(response.data.results)
        setPersonajes(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
    })
    },[])

    return<>
    <div className="personajes">
     {personajes.map(objeto => { return <Link to={objeto.uid}> <div> <img src={foto}></img> <p>{objeto.name}</p> </div> </Link> })}
     </div>
        <button hidden={nextPagina===null} onClick={siguiente}>Siguiente pagina</button>
        <button hidden={returnPagina===null} onClick={anterior}>Anterior pagina</button>
    </>

}

export default Personajes;