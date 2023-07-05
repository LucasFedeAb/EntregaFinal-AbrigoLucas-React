import { useState, useEffect, createContext } from "react";
import { useNotification } from "../Notification/NotificationService";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const { setNotification } = useNotification();

  //Agregar producto a carrito
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => {
        return [...prev, productToAdd];
      });
      setNotification(
        "success",
        `Se agrego correctamente ${productToAdd.quantity} ${productToAdd.name} al carrito`,
        4
      );
    } else {
      setNotification("danger", "Ya esta agregado");
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
  const clearCart = () => setCart([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        deleteItem,
        isInCart,
        totalQuantity,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
