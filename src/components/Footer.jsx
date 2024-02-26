import Contacto from "./Contacto"
import Seguinos from "./Seguinos"
import TrabajaCon from "./TrabajaCon"

const Footer = () => {

    return(
      <div className="container-fluid pt-4 pb-4 mt-4 footer_bg">
        <div className="row align-items-center color_bg">
          <div className="col-lg-4 d-none d-lg-block consetra pt-2 pb-3">
            <Contacto />
          </div>
          <div className="col-lg-4 d-none d-lg-block consetra pt-2 pb-3">
            <Seguinos />
          </div>
          <div className="col-lg-4 d-none d-lg-block consetra pt-2 pb-3">
            <TrabajaCon />
          </div>
        </div>
      </div>
    )
  
  }
  
export default Footer