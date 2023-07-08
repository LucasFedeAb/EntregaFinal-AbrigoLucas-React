import { useCart } from "../../Hooks/useCart";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const CartInfo = () => {
  const { totalQuantity, totalPrice, cart, clearCart } = useCart();

  let itemId = localStorage.getItem("currentId");

  /* const { itemId } = useParams(); */
  return (
    <>
      <div className="vh-100 mt-5 pt-5">
        {cart?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

        <div className="text-center mb-5">
          <ButtonCard
            label={"Vaciar carrito"}
            textColor="light"
            bg="danger"
            onClick={clearCart}
          ></ButtonCard>
        </div>

        <p className="text-center">Cantidad total: {totalQuantity}</p>
        <p className="text-center">Total a pagar: ${totalPrice}</p>

        <div className="d-flex flex-column flex-md-row text-center ps-5 pe-5">
          <Link to={`/Producto/${itemId}`} className="  mb-3">
            <ButtonCard
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
              label={"Volver a catálogo"}
              textColor="light"
              bg="dark"
            ></ButtonCard>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartInfo;
