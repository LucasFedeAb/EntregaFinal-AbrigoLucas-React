import { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../Hooks/useCart";
import ButtonCard from "../Buttons/ButtonCard";
/* import { useNotification } from "../../Notification/NotificationService.jsx";
import CartContainer from "../CartContainer/CartContainer"; */
import { Link } from "react-router-dom";

const ItemDetail = ({ id, img, name, category, price, description, stock }) => {
  const [quantity, setQuantity] = useState(0);
  /* const [showCartInfo, setShowCartInfo] = useState(false); */
  /* const { setNotification } = useNotification(); */
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const objProduct = {
      id,
      name,
      price,
      img,
      category,
      quantity,
    };
    addItem(objProduct);
  };

  /*  const handleCart = () => {
    setShowCartInfo(true);
  }; */

  return (
    <section className="py-5 mb-5 container-fluid">
      <PageTitle title={`Wexis | Detalle/${category}/${name}`} />
      <div className="container-fluid px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0 w-50"
              src={img}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">ID: {id}</div>
            <div className="small mb-1 text-capitalize">{category}</div>
            <h1 className="display-5 fw-bolder">Detalle de producto</h1>
            <div className="small mb-1">Stock: {stock}</div>
            <div className="fs-5 mb-5">
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <span>$ {price}</span>
            </div>
            <h1>{name}</h1>
            <p className="lead">{description}</p>
            <div className="d-flex position-absolute">
              {quantity == 0 ? (
                stock > 0 ? (
                  <ItemCount stock={stock} onAdd={handleOnAdd} />
                ) : (
                  <p className="fw-bold text-danger"> SIN STOCK DISPONIBLE</p>
                )
              ) : (
                <Link to={"/cart"}>
                  <ButtonCard
                    label="Finalizar compra"
                    textColor="light"
                    bg="success"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
