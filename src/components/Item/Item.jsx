import StarWidget from "../StarWidget/StarWidget";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ category, id, img, name, price, section }) => {
  const [hover, setHover] = useState(false);
  return (
    <article className="col mb-5">
      <div
        className="card h-100 "
        style={{
          boxShadow: hover ? "0 12px 32px #3333331a" : "none",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="badge bg-warning text-white position-absolute text-uppercase "
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {section}
        </div>
        <img
          className="card-img-top justify-content-center p-5 img-height"
          src={img}
          alt={`${{ name }}`}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <StarWidget />
            </div>
            <span className="text-muted text-decoration-line-through"></span>$
            {price}
          </div>
        </div>

        <div className="text-center p-5">
          <Link to={`/Producto/${id}`}>
            <ButtonCard label={"Ver detalle"} colorHover={"dark"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;
