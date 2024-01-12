import Carousel from "./components/Carousel"
import ItemListContainer from "./components/ItemListContainer"
import LosMasVendidos from "./components/LosMasVendidos"
import Footer from "./components/footer"
import Header from "./components/header"

const App = () => {

  return(
    <div>
      <Header />
      <ItemListContainer greeting={"Estamos actualizando nuestro sitio. Gracias por la paciencia!"} />
      <Carousel />
      <LosMasVendidos />
      <Footer />
    </div>
  )

}

export default App