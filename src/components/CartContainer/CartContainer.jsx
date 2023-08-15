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
      <section className="d-flex justify-content-center align-items-center mb-5">
        {cart !== null && cart.length > 0 ? (
          <CartInfo cart={cart} />
        ) : (
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center ">
            <div className="p-3">
              <h3 className="text-center p-3">
                ¡Empieza un carrito de compras!
              </h3>
              <h5 className="text-center pt-2 text-secondary">
                Suma productos y conseguí envio gratis.
              </h5>
            </div>
            <Link to="/">
              <ButtonCard
                label={"Descubrir productos"}
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
