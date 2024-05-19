import axios from "axios"
import { useEffect, useState } from "react"
import './personajes.css'
import foto from '../images/especies.jpg'

const Especies = () => {
    const [especies, setEspecies] = useState([])
    const [nextPagina, setNextPagina] = useState(null)
    const [returnPagina, setReturnPagina] = useState(null)

    const siguiente = () => {
        axios.get(nextPagina).then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
    })
        
    }

    const anterior = () => {
        axios.get(returnPagina).then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
        })
    }

    useEffect(() => {
        axios.get("https://www.swapi.tech/api/species/").then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
    })
    },[])

    useEffect (() => {
        axios.get("https://www.swapi.tech/api/species/").then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)})
    },[])

    return<>
    <div className="personajes">
        {especies.map(objeto => {return <div> <img src={foto}></img> <p>{objeto.name}</p> </div>})}
    </div>
    <button hidden={nextPagina===null} onClick={siguiente}>Siguiente pagina</button>
    <button hidden={returnPagina===null} onClick={anterior}>Anterior pagina</button>
    </> 
}

export default Especies;