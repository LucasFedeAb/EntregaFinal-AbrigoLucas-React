import "./Item.css";
import StarWidget from "../StarWidget/StarWidget";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";

const Item = ({ category, id, img, name, price }) => {
  return (
    <div className="col mb-5 ">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {/* Sale */}
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
        <div className="boton">
          <div className="text-center">
            <Link to={`/Producto/${id}`}>
              <ButtonCard label={"Ver detalle"} colorHover={"dark"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
