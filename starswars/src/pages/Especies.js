import axios from "axios"
import { useEffect, useState } from "react"
import './personajes.css'
import foto from '../images/especies.jpg'

const Especies = () => {
    const [especies, setEspecies] = useState([])

    useEffect (() => {
        axios.get("https://www.swapi.tech/api/species/").then (response => {
            console.log(response.data.results)
            setEspecies(response.data.results)})
    },[])

    return<>
    <div className="personajes">
        {especies.map(objeto => {return <div> <img src={foto}></img> <p>{objeto.name}</p> </div>})}
    </div>
        <button>Cargar mas</button>
    </> 
}

export default Especies;