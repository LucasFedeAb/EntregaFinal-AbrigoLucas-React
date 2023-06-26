import { useCart } from "../../Hooks/useCart";

const CartInfo = () => {
  const { cart, totalQuantity, totalPrice, deleteItem } = useCart();
  return (
    <>
      <div>
        <h2>Información del carrito:</h2>
        {cart?.map((item) => {
          const { id, img, quantity, name, price } = item;
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
        })}
        <p>Cantidad total: {totalQuantity}</p>
        <p>Total a pagar: ${totalPrice}</p>
      </div>
    </>
  );
};

export default CartInfo;
