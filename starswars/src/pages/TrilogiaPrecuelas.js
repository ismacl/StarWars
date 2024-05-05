import React from "react";

const trilogia_precuelas = () =>{
    const peliculas = ["La amenaza fantasma", "El ataque de los clones", "La venganza de los Sith"]
    return<>
    <div>
        <h2>Películas de las Precuelas</h2>

        <ul>
                {peliculas.map((pelicula, index) => (
                    <li key={index}>{pelicula}</li>
                ))}
            </ul>
    </div>
    </>
}

export default trilogia_precuelas;