import { useCart } from "../../Hooks/useCart";

const CartItem = ({ id, img, quantity, name, price }) => {
  const { deleteItem } = useCart();

  return (
    <div className="mb-4" key={id}>
      <div>
        <div className="d-flex justify-content-between">
          <img style={{ width: "40px" }} src={img} alt="imgCart" />
          <p className="pe-3">Cantidad: {quantity} </p>
          <p className="pe-3">{name} </p>
          <p> Precio/unidad: ${price} </p>
          <button
            className="btn btn-danger text-light h-25 ms-3 py-1"
            onClick={() => {
              deleteItem(id);
            }}
          >
            <p>Eliminar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
