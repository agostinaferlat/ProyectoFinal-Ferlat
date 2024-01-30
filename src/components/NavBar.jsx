import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

  return(
    <div className="row justify-content-between navEstilo">
      <nav className="col-md-8 navbar navbar-expand-md p-2 m-0 ms-3">
        <ul className="navbar-nav text-uppercase p-0">
          <li className="nav-item"><NavLink className="nav-link ms-1 nav-btn" to={"/"}>Productos</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link ms-1 nav-btn" to={"/category/accesorios"}>Accesorios</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link ms-1 nav-btn" to={"/category/enriquecimiento"}>Enriquecimiento Ambiental</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link ms-1 nav-btn" to={"/category/juguetes"}>Juguetes</NavLink></li>
        </ul>
      </nav>
      <div className="col-md-1 p-1">
        <CartWidget />
      </div> 
    </div>
  )
}
  
export default NavBar