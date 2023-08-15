/* import CartWidget from "../CartWidget/CartWidget"; */
import { useCart } from "../../Hooks/useCart";
import styles from "./TogglerCart.module.css";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const TogglerCart = () => {
  const { totalQuantity, totalPrice, cart } = useCart();

  return (
    <>
      <div className={styles.cart} id="cart">
        {/* <i className={`bx bx-x ${styles.cart__close}`} id="cart-close" /> */}
        <h2 className={styles.cart__titleCenter}>My Carrito</h2>
        <div className="mt-3 pt-3">
          {cart?.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div className={styles.cart__prices}>
          <span className={styles.cart__pricesItem}>{totalQuantity} items</span>
          <span className={styles.cart__pricesTotal}>${totalPrice}</span>
        </div>
        <Link to={"/cart"}>
          <ButtonCard label="Finalizar compra" textColor="light" bg="success" />
        </Link>
      </div>
    </>
  );
};

export default TogglerCart;
