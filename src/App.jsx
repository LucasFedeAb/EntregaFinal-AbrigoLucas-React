import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import CheckOutContainer from "./components/CheckoutContainer/CheckoutContainer.jsx";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import RecordVisits from "../services/firebase/firebase/RecordVisits";

function App() {
  return (
    <>
      <RecordVisits />
      <BrowserRouter>
        <CartProvider>
          <NavbarContainer />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title={`C A T Á L O G O`} />}
            />
            <Route
              path="/categories/:categoryId"
              element={<ItemListContainer title={``} />}
            />
            <Route path="/Producto/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckOutContainer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
