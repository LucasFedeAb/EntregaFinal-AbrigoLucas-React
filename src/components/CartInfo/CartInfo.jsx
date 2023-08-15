import { useCart } from "../../Hooks/useCart";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import icon from "./assets/return.svg";
import truckIcon from "./assets/truck.svg";
import { useEffect } from "react";

const CartInfo = () => {
  const {
    totalQuantity,
    totalPrice,
    newTotalPrice,
    shipment,
    freeShipment,
    cart,
    clearCart,
  } = useCart();

  let itemId = localStorage.getItem("currentId");

  useEffect(() => {
    // Cuando el componente se monta, llevar al usuario al inicio del detalle del producto
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <section className={cart.length <= 1 && `vh-100`}>
        <div className="pt-5 mb-5">
          <h3 className="text-center">RESUMÉN DE CARRITO</h3>

          <div className="mt-3 pt-3">
            {cart?.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          {totalPrice >= freeShipment ? (
            <>
              <div className="d-flex flex-row justify-content-center p-3 ">
                <img className="me-2 mb-2" src={truckIcon} alt="truck" />
                <h6 className="text-center "> Envío gratis</h6>
              </div>
            </>
          ) : (
            <>
              <div className="d-flex flex-row justify-content-center p-3 ">
                <img className="me-2 mb-2" src={truckIcon} alt="truck" />
                <h6 className="text-center"> Costo de envío: ${shipment}</h6>
              </div>
            </>
          )}
          <div className="text-center mb-5">
            <ButtonCard
              label={"Vaciar carrito"}
              textColor="light"
              bg="dark"
              onClick={clearCart}
            ></ButtonCard>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-around mb-3">
            <h6 className="text-center">Cantidad Total: {totalQuantity}</h6>
            <h6 className="text-center">Total: ${newTotalPrice}</h6>
          </div>

          <div className="d-flex flex-column flex-md-row text-center ps-5 pe-5 mb-5">
            <Link to={`/Producto/${itemId}`} className="  mb-3">
              <ButtonCard
                icon={<img className="me-2" src={icon} alt="return" />}
                label={"Volver a detalle"}
                textColor="light"
                bg="dark"
              ></ButtonCard>
            </Link>
            <Link to="/checkout" className="mb-3">
              <ButtonCard
                label={"Confirmar pedido"}
                textColor="light"
                bg="success"
              ></ButtonCard>
            </Link>
            <Link to={`/`} className="mb-3">
              <ButtonCard
                icon={<img className="me-2" src={icon} alt="return" />}
                label={"Volver a catálogo"}
                textColor="light"
                bg="dark"
              ></ButtonCard>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartInfo;
