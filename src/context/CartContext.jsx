import { useState, useEffect, createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  //Agregar producto a carrito
  const addItem = (productToAdd) => {
    deleteItem(productToAdd.id);
    setCart((prev) => {
      return [...prev, productToAdd];
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      background: "#d4edda;",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        const swalContainer = Swal.getPopup();
        swalContainer.style.width = "max-content";
        swalContainer.style.padding = "2%";
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "<span style='color: #155724;'>Agregado al carrito</span>",
    });
  };

  const updateItemQuantity = (productToAdd) => {
    deleteItem(productToAdd.id);
    setCart((prev) => {
      return [...prev, productToAdd];
    });
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
  let totalPrice = getTotalPrice();
  const clearCart = () => setCart([]);

  //Calcular precio final con envío
  const shipment = 500;
  const freeShipment = 8000;
  let newTotalPrice = totalPrice;
  {
    totalPrice < freeShipment
      ? (newTotalPrice = newTotalPrice + shipment)
      : newTotalPrice;
  }

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
        newTotalPrice,
        shipment,
        freeShipment,
        clearCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
