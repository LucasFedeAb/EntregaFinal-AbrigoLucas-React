import { useCart } from "../../Hooks/useCart";
import trashIcon from "./assets/trash-fill.svg";

const CartItem = ({ id, img, quantity, name, price }) => {
  const { deleteItem } = useCart();

  return (
    <section className="conatiner container-fluid">
      <div className="conatiner container-fluid mb-4" key={id}>
        <div className="d-flex  justify-content-between border border-1">
          <img
            className="img img-fluid "
            style={{ maxWidth: "30px" }}
            src={img}
            alt="imgCart"
          />
          <div className="text-center  p-2">
            <h6 className="">Cantidad</h6>
            <span>{quantity} </span>
          </div>
          <div className="text-center ">
            <h6 className="">Nombre</h6>
            <span>{name} </span>
          </div>
          <div className="text-center ">
            <h6 className="">Precio</h6>
            <span>${price} </span>
          </div>
          <div className="text-center ">
            <h6 className="">Subtotal</h6>
            <span>${quantity * price} </span>
          </div>
          <button
            className="border-none btn  h-25 ms-3 py-1"
            onClick={() => {
              deleteItem(id);
            }}
          >
            <img src={trashIcon} alt="trash" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
