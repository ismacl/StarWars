import { Outlet } from "react-router-dom";
import "./Contenedor.css";
import "./pages/Peliculas";
import "./pages/Personajes";
import "./pages/Especies";
import { Link } from "react-router-dom";
<link href="https://fonts.cdnfonts.com/css/star-wars" rel="stylesheet"/>

const Contenedor= () => {
    return <>
    <div className="fondo">
    <h2 className="titulo">Star Wars Estrellas y leyendas</h2>
    <ul>
    <li><Link to ="/Peliculas">Peliculas</Link></li>
    <li><Link to ="/Personajes">Personajes</Link></li>
    <li><Link to ="/Especies">Especies</Link></li>
    </ul>
    <Outlet/>
    </div>
    </>
}

export default Contenedor;