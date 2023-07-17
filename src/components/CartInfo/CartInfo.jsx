import { useCart } from "../../Hooks/useCart";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import icon from "./assets/return.svg";

const CartInfo = () => {
  const { totalQuantity, totalPrice, cart, clearCart } = useCart();

  let itemId = localStorage.getItem("currentId");

  return (
    <>
      <section className={cart.length <= 1 && `vh-100`}>
        <div className="pt-5 mb-5">
          <h3 className="text-center">RESUMÉN DE CARRITO</h3>

          <div className="mt-3 pt-3">
            {cart?.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>

          <div className="text-center mb-5">
            <ButtonCard
              label={"Vaciar carrito"}
              textColor="light"
              bg="dark"
              onClick={clearCart}
            ></ButtonCard>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-around mb-3">
            <h6 className="text-center">Cantidad Total: {totalQuantity}</h6>
            <h6 className="text-center">Total: ${totalPrice}</h6>
          </div>

          <div className="d-flex flex-column flex-md-row text-center ps-5 pe-5 mb-5">
            <Link to={`/Producto/${itemId}`} className="  mb-3">
              <ButtonCard
                icon={<img className="me-2" src={icon} alt="return" />}
                label={"Volver a detalle"}
                textColor="light"
                bg="dark"
              ></ButtonCard>
            </Link>
            <Link to="/checkout" className="mb-3">
              <ButtonCard
                label={"Confirmar pedido"}
                textColor="light"
                bg="success"
              ></ButtonCard>
            </Link>
            <Link to={`/`} className="mb-3">
              <ButtonCard
                icon={<img className="me-2" src={icon} alt="return" />}
                label={"Volver a catálogo"}
                textColor="light"
                bg="dark"
              ></ButtonCard>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartInfo;
