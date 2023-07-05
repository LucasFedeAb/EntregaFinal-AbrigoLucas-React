import { useCart } from "../../Hooks/useCart";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const CartInfo = () => {
  const { totalQuantity, totalPrice, cart } = useCart();

  let itemId = localStorage.getItem("currentId");

  /* const { itemId } = useParams(); */
  return (
    <>
      <div className="vh-100 mt-5 pt-5">
        {cart?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

        <p>Cantidad total: {totalQuantity}</p>
        <p>Total a pagar: ${totalPrice}</p>
        <div className="d-flex">
          <Link to={`/Producto/${itemId}`}>
            <ButtonCard
              label={"Volver a detalle"}
              textColor="light"
              bg="dark"
            ></ButtonCard>
          </Link>
          <Link to="/checkout">
            <ButtonCard
              label={"Confirmar pedido"}
              textColor="light"
              bg="success"
            ></ButtonCard>
          </Link>
          <Link to={`/`}>
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
