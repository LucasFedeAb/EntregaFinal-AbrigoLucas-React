import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

import ButtonCard from "../Buttons/ButtonCard";

const ItemDetail = ({ id, img, name, category, price, description, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
  };

  return (
    <section className="py-5 container-fluid vh-100">
      <div className="container px-4 px-lg-5 my-5">
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
            <div className="d-flex">
              {quantity == 0 ? (
                stock > 0 ? (
                  <ItemCount stock={stock} onAdd={handleOnAdd} />
                ) : (
                  <p className="fw-bold text-danger"> SIN STOCK DISPONIBLE</p>
                )
              ) : (
                <ButtonCard
                  label="Finalizar compra"
                  textColor="light"
                  bg="success"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <RelatedProducts /> */}
    </section>
  );
};

export default ItemDetail;
