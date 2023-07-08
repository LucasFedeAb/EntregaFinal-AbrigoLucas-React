import { useCart } from "../../Hooks/useCart";
import CartInfo from "../CartInfo/CartInfo";
import { Link } from "react-router-dom";
import ButtonCard from "../Buttons/ButtonCard";
import PageTitle from "../PageTitle/PageTitle";

const CartContainer = () => {
  const { cart } = useCart();

  return (
    <>
      <PageTitle title={`Wexis | Detalle de carrito`} />
      <section className="d-flex justify-content-center align-items-center mb-5 vh-100">
        {cart !== null && cart.length > 0 ? (
          <CartInfo cart={cart} />
        ) : (
          <div className="">
            <p className="fs-5 fw-bold">CARRITO VACIO</p>
            <Link to={`/`}>
              <ButtonCard
                label={"Volver al inicio"}
                textColor="light"
                bg="dark"
              ></ButtonCard>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default CartContainer;
