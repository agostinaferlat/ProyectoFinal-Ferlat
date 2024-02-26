import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import CartContextProvider from "./components/context/CartContext";
import Footer from "./components/footer"
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout"
import Error from "./components/Error";

const App = () => {

  return(
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer /> }/>
          <Route path={"*"} element={<Error />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )

}

export default App