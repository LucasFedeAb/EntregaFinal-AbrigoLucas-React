import { useCart } from "../../Hooks/useCart";
import CartTogglerItem from "../CartTogglerItem/CartTogglerItem";
import styles from "./CartToggler.module.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonCard from "../Buttons/ButtonCard";

const CartToggler = () => {
  const { totalQuantity, totalPrice, cart } = useCart();
  const navigate = useNavigate();
  const scrollToTarget = () => {
    navigate("/");
    const target = document.querySelector("#catalogo");
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section>
        {cart !== null && cart.length > 0 ? (
          <>
            <div className={``}>
              <div className={`${styles.cart__container}`}>
                {cart?.map((item) => {
                  return <CartTogglerItem key={item.id} {...item} />;
                })}
              </div>
            </div>
            <div className={`${styles.cart__prices}`}>
              <span className={`${styles.cart__prices__item}`}>
                {totalQuantity > 1
                  ? `${totalQuantity} items`
                  : `${totalQuantity} item`}
              </span>
              <span className={`${styles.cart__prices__total}`}>
                ${totalPrice}
              </span>
            </div>
            <div className=" text-center p-5" data-bs-dismiss="offcanvas">
              <Link to={"/cart"}>
                <ButtonCard
                  label="Finalizar compra"
                  textColor="light"
                  bg="success"
                />
              </Link>
            </div>
          </>
        ) : (
          <section className="d-flex flex-column justify-content-center align-items-center mt- pt-5">
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
              <p className="fs-5 fw-bold text-white p-2">
                ¡Empieza un carrito de compras!
              </p>
              <p className="text-info pb-5">
                Suma productos y conseguí envio gratis.
              </p>

              <Link data-bs-dismiss="offcanvas" onClick={scrollToTarget}>
                <ButtonCard
                  label={"Descubrir productos"}
                  textColor="light"
                  bg="dark"
                ></ButtonCard>
              </Link>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default CartToggler;
