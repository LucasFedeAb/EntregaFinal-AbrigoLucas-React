import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title={`CATÁLOGO`} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer title={``} />}
            />
            <Route path="/Producto/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
