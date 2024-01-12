import Carousel1 from "../assets/banner1.jpeg"
import Carousel2 from "../assets/banner2.jpg"
import Carousel3 from "../assets/banner3.jpg"


const Carousel = () => {
    return(
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide carousel-dark">
                        <div className="carousel-inner">
                            <div className="carousel-item active c-item">
                                <img src={Carousel1} className="d-block w-100 size-img" alt="..."/>
                            </div>
                            <div className="carousel-item c-item">
                                <img src={Carousel2} className="d-block w-100 size-img" alt="..."/>
                            </div>
                            <div className="carousel-item c-item">
                                <img src={Carousel3} className="d-block w-100 size-img" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Carousel;
