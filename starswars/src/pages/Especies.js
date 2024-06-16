import axios from "axios"
import { useEffect, useState } from "react"
import './especies.css'
import foto from '../images/especies.jpg'
import { Link } from "react-router-dom"

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
        }).catch(error => {})
    }

    useEffect(() => {
        axios.get("https://www.swapi.tech/api/species/").then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)
        setNextPagina(response.data.next)
        setReturnPagina(response.data.previous)
    })
    },[])

    return<>
    <div className="especies">
        {especies.map(objeto => {return <Link to={objeto.uid}> <div> <img className="foto" src={foto}></img> <p className="nombre">{objeto.name}</p> </div> </Link>})}
    </div>
    <button hidden={nextPagina===null} onClick={siguiente}>Siguiente pagina</button>
    <button hidden={returnPagina===null} onClick={anterior}>Anterior pagina</button>
    </> 
}

export default Especies;