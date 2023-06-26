import { useCart } from "../../Hooks/useCart";
import CartInfo from "../CartInfo/CartInfo";

const CartContainer = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Verificar si hay productos en carrito */}
      {cart !== null && cart.length > 0 ? (
        <CartInfo {...cart} />
      ) : (
        <p className="fs-5 fw-bold">CARRITO VACIO</p>
      )}
    </div>
  );
};

export default CartContainer;
