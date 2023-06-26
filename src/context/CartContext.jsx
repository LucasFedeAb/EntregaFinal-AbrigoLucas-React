import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Agregar producto a carrito
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => {
        return [...prev, productToAdd];
      });
    } else {
      alert("Ya esta agregado");
    }
  };
  //Eliminar producto de carrito
  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  //Verificar si esta en carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  //Funcion de Cantidad total
  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };
  //Funcion de Total a pagar
  const getTotalPrice = () => {
    let totalPrice = 0;

    cart.forEach((prod) => {
      totalPrice += prod.quantity * prod.price;
    });

    return totalPrice;
  };

  const totalQuantity = getTotalQuantity();
  const totalPrice = getTotalPrice();

  return (
    <CartContext.Provider
      value={{ cart, addItem, deleteItem, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
