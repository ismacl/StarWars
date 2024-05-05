import React from "react";

const trilogia_original = () =>{
    const peliculas = ["Una nueva esperanza", "El imperio contraataca", "El retorno del Jedi"]
    return<>
    <div>
        <h2>Películas de la Trilogía Original</h2>
        <ul>
                {peliculas.map((pelicula, index) => (
                    <li key={index}>{pelicula}</li>
                ))}
            </ul>
    </div>
    </>
}

export default trilogia_original;