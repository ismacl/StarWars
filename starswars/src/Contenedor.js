import { Outlet } from "react-router-dom";
import "./Contenedor.css";
import "./pages/Peliculas"

const Contenedor= () => {
    return <>
    <ul>
    <li><a className="activo">Peliculas</a></li>
    <li><a>Personajes</a></li>
    <li><a>Especies</a></li>
    </ul>
    <Outlet/>
    </>
}

export default Contenedor;