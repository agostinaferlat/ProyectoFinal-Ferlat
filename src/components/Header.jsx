import ImagenLogo from "../assets/iconuno-round.png"
import NavBar from "./NavBar";

const Header = () => {
  return(

    <header className="container-fluid estiloHeader">
      <div>
        <div className="divLogo">
          <a className="logo-hover" href="index.html">
            <img className="imagen_logo m-3" src={ImagenLogo} alt="logo tienda"/>
          </a>
        </div>

        <div className="row divLogo">
          <h1 className="col-lg-10 text-start fw-bold m-1 p-1 animate__animated animate__lightSpeedInLeft"> Huellas en Manada </h1>
          <h3 className="col-lg-8 text-start m-1 p-1 animate__animated animate__fadeIn"> La mejor opción en artículos para tus mascotas</h3>
        </div>
      </div> 
      <div className="">
        <NavBar />
      </div>
    </header>

  )
}
  
export default Header;