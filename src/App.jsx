import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/footer"
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App