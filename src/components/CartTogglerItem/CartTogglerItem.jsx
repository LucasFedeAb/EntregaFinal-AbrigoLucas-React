import styles from "./CartTogglerItem.module.css";
import { useCart } from "../../Hooks/useCart";
import trashIcon from "./assets/trash-fill.svg";
import { Link } from "react-router-dom";

const CartTogglerItem = ({ id, img, name, price, stock, quantity }) => {
  const { deleteItem } = useCart();

  return (
    <>
      <article className={`${styles.cart__card}`} key={id}>
        <div className={`${styles.cart__box}`} data-bs-dismiss="offcanvas">
          <Link to={`/Producto/${id}`}>
            <img src={img} alt="cartImage" className={`${styles.cart__img}`} />
          </Link>
        </div>
        <div className={`${styles.cart__details}`}>
          <h3 className={`${styles.cart__title}`}>{name}</h3>
          <span className={`${styles.cart__price}`}>${quantity * price}</span>
          <div className={`${styles.cart__amount}`}>
            <div className={`${styles.cart__amount__content}`}>
              {/* <ItemCount stock={stock} onAdd={addItem} /> */}
              {/* <span className={`${styles.cart__amount__box}`}>-</span> */}
              <span className={`${styles.cart__amount__number}`}>
                {quantity} {quantity > 1 ? "unidades" : "unidad"}
              </span>
              {/* <span className={`${styles.cart__amount__box}`}>+</span> */}
            </div>
            <button
              className="border-none btn bg-dark h-25 ms-4 ms-md-5 py-1 mt-1 pointer"
              onClick={() => {
                deleteItem(id);
              }}
            >
              <img src={trashIcon} alt="trash" />
            </button>

            {/* <img src={trashIcon} alt="trash" className="bg-dark" /> */}
          </div>
        </div>
      </article>
    </>
  );
};

export default CartTogglerItem;
