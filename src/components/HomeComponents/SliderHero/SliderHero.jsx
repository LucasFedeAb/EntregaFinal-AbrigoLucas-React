import { Link } from "react-router-dom";
import styles from "./SliderHero.module.css";

const SliderHero = ({ images }) => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className={`carousel slide carousel-fade bg-dark  ${styles.slider} me-5`}
      data-bs-ride="carousel"
    >
      <div className={`carousel-inner`}>
        {images.map((product, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Link to={`/Producto/${product.id}`}>
              <img
                src={product.img}
                className={`d-block w-100 rounded-pill rounded-bottom-0 p-5 bg-dark ${styles.img}`}
                alt={`HERO${index}`}
              />
            </Link>
            <div className="border-bottom border-secondary border-1 pb-2"></div>
            <Link to={`/Producto/${images[(index + 1) % images.length].id}`}>
              <img
                src={images[(index + 1) % images.length].img}
                className={`d-block w-100 rounded-pill rounded-top-0 p-5 bg-dark ${styles.img}`}
                alt="Hero"
              />
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button
          className={`${styles.controls} carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon position-absolute"
            style={{
              top: "0",
              left: "7rem",
              transform: "rotate(90deg)",
            }}
            aria-hidden="false"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={` carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon position-absolute "
            style={{
              bottom: "0",
              right: "7rem",
              transform: "rotate(90deg)",
            }}
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SliderHero;
