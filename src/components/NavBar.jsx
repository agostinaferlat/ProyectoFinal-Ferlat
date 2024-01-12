import CartWidget from "./CartWidget"

const NavBar = () => {

  return(
    <div className="row justify-content-between navEstilo">
      <nav className="col-md-8 navbar navbar-expand-md p-2 m-0 ms-3">
        <ul className="navbar-nav text-uppercase p-0">
          <li className="nav-item"><a className="nav-link ms-1 nav-btn" href="index.html">Home</a></li>
          <li className="nav-item"><a className="nav-link ms-1 nav-btn" href="">Productos</a></li>
          <li className="nav-item"><a className="nav-link ms-1 nav-btn" href="">Servicios</a></li>
          <li className="nav-item"><a className="nav-link ms-1 nav-btn" href="">Contacto</a></li>
        </ul>
      </nav>
      <div className="col-md-1 p-1">
        <CartWidget />
      </div> 
    </div>
  )
}
  
export default NavBar