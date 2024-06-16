import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import not_found from '../images/404.png';
import wookie from '../images/wookie.jpg';
import './DetallePersonaje.css';
import humano from '../images/humanos.jpg'
import droides from '../images/droides.jpg'

const DetalleEspecies = () => {
    const [Nombre, setNombre] = useState('');
    const [lengua, setLengua] = useState('');
    const [vida, setVida] = useState('');
    const [personajes, setPersonajes] = useState([]);
    const [error, setError] = useState('');
    const params = useParams();

    useEffect(() => {
        const especieId = params.idEspecie;
        if (!Number.isInteger(Number(especieId))) {
            setError("ID de especie no valido");
        } else {
            axios.get(`https://www.swapi.tech/api/species/${especieId}`)
                .then(response => {
                    if (response.data.result) {
                        const properties = response.data.result.properties;
                        setNombre(properties.name);
                        setLengua(properties.language);
                        setVida(properties.average_lifespan);
                        fetchPersonajes(properties.people);
                    } else {
                        setError("No se encontró la especie que buscas");
                    }
                })
                .catch(() => {
                    setError("No se encontró la especie que buscas");
                });
        }
    }, [params.idEspecie]);

    const fetchPersonajes = (urls) => {
        const requests = urls.map(url =>
            axios.get(url)
                .then(response => ({
                    name: response.data.result.properties.name,
                    uid: response.data.result._id
                }))
                .catch(() => null)
        );

        axios.all(requests)
            .then(results => {
                setPersonajes(results.filter(result => result !== null));
            });
    };

    let image;
    if (Nombre === "Wookie") {
        image = wookie
    }else if (Nombre === "Human") {
        image = humano
    }else if (Nombre === "Droid") {
        image = droides
    }else {
        image = not_found
    }

    return (
        <>
            {error && (
                <div className="error">
                    <h1>{error}</h1>
                </div>
            )}
            {!error && (
                <div className="personaje">
                    <div className="foto">
                        <img src={image} alt={Nombre} />
                    </div>
                    <div className="datos">
                        <h3>{Nombre}</h3>
                        <br />
                        <p>Idioma: {lengua}</p>
                        <p>Promedio de vida: {vida} años</p>
                        <br></br>
                        <div className="enlaces">
                            <p>Personajes de esta especie:</p>
                            {personajes.map((objeto) => (
                                    <div>
                                        <p className="nombre">{objeto.name}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DetalleEspecies;