import { Outlet } from "react-router-dom";
import "./Contenedor.css";
import "./pages/Peliculas";
import "./pages/Personajes";
import "./pages/Especies";
import { Link } from "react-router-dom";

const Contenedor= () => {
    return <>
    <h2 className="titulo">Star Wars Estrellas y leyendas</h2>
    <ul>
    <li><Link to ="/Peliculas">Peliculas</Link></li>
    <li><Link to ="/Personajes">Personajes</Link></li>
    <li><Link to ="/Especies">Especies</Link></li>
    </ul>
    <Outlet/>
    </>
}

export default Contenedor;