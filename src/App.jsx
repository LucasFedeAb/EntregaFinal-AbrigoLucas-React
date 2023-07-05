import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";
import { NotificationProvider } from "./Notification/NotificationService.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import CheckOutContainer from "./components/CheckoutContainer/CheckoutContainer.jsx";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavbarContainer />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer title={`CATÁLOGO`} />}
              />
              <Route
                path="/categories/:categoryId"
                element={<ItemListContainer title={``} />}
              />
              <Route
                path="/Producto/:itemId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckOutContainer />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
          <Footer />
        </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
