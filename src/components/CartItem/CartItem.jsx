import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
/* import ItemCount from "../ItemCount/ItemCount"; */
import trashIcon from "./assets/trash-fill.svg";

const CartItem = ({ id, img, name, quantity, price, stock, category }) => {
  const { deleteItem } = useCart();

  return (
    <section className="container container-fluid">
      <div className="conatiner container-fluid mb-4" key={id}>
        <div className="d-flex  justify-content-between border-bottom border-3 pb-4">
          <Link to={`/Producto/${id}`}>
            <img
              className="img img-fluid "
              style={{ maxWidth: "50px" }}
              src={img}
              alt="imgCart"
            />
          </Link>

          <div className="p-2">
            <div className="d-flex">
              <h6>{`${quantity}x`}</h6>
              <h6 className="ps-2">{`${name}`}</h6>
            </div>
            <h6>${price} </h6>
          </div>

          <div className="text-center p-2">
            <h6 className="">Subtotal</h6>
            <h6>${quantity * price} </h6>
          </div>
          {/* <ItemCount stock={stock} onAdd={quantity} /> */}
          <button
            className="border-none btn bg-dark color-light h-25 ms-3 py-1 mt-3"
            onClick={() => {
              deleteItem(id);
            }}
          >
            <img className="" src={trashIcon} alt="trash" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
