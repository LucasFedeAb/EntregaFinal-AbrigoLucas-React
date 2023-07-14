import { useCart } from "../../Hooks/useCart";
import CartInfo from "../CartInfo/CartInfo";
import { Link } from "react-router-dom";
import ButtonCard from "../Buttons/ButtonCard";
import PageTitle from "../PageTitle/PageTitle";
import icon from "./assets/return.svg";

const CartContainer = () => {
  const { cart } = useCart();

  return (
    <>
      <PageTitle title={`Wexis | Detalle de carrito`} />
      <section className="d-flex justify-content-center align-items-center mb-5">
        {cart !== null && cart.length > 0 ? (
          <CartInfo cart={cart} />
        ) : (
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center ">
            <p className="fs-5 fw-bold">CARRITO VACIO</p>
            <Link to={`/`}>
              <ButtonCard
                icon={<img className="me-2" src={icon} alt="return" />}
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
