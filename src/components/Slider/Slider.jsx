import Slider from "./Slider.module.css";
import StarWidget from "../StarWidget/StarWidget";

const SliderHero = ({ images }) => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className={`carousel slide carousel-fade bg-dark  ${Slider.sliderCustom} me-5`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className={`d-block w-100 rounded-pill rounded-bottom-0 p-5  bg-dark  ${Slider.img}`}
              alt={`HERO${index}`}
            />
            <div className="border-bottom border-secondary border-1 pb-2"></div>
            <img
              src={
                index === images.length - 1
                  ? images[index - 1]
                  : images[index + 1]
              }
              className={`d-block w-100 rounded-pill rounded-top-0 p-5 bg-dark    ${Slider.img}`}
              alt="Hero"
            />
          </div>
        ))}
      </div>
      <div>
        <button
          className={`${Slider.controls} carousel-control-prev `}
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon position-absolute"
            style={{ top: "0", left: "7rem", transform: "rotate(90deg)" }}
            aria-hidden="true"
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
            className="carousel-control-next-icon position-absolute"
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
