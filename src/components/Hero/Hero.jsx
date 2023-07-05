import hero from "./Hero.module.css";
import SliderHero from "../Slider/Slider.jsx";
import arrow from "./assets/chevron-double-down.svg";

const Hero = ({ images }) => {
  return (
    <>
      <section
        className={`d-flex flex-column justify-content-center align-items-center ${hero.container}`}
      >
        <div
          className={`d-flex flex-row  align-items-center justify-content-between pe-5 ${hero.heroImg}`}
        >
          <div
            className={` justify-content-start ps-5 d-none d-md-block ${hero.title}`}
          >
            <h1 className={`fw-bold`}>LLEVAMOS EL TIEMPO A TUS MANOS</h1>
            <p className={`d-none d-lg-block`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ratione dicta expedita vero corporis deserunt tenetur enim, saepe
              rem, quo reiciendis sapiente explicabo dolores iusto libero quae
              fugiat voluptates hic.
            </p>
            <div className={`d-flex`}>
              <a
                href="#"
                className={`text-center m-2 bg-light text-black text-decoration-none ${hero.button}`}
              >
                Explorar
              </a>

              <a
                href="#catalogo"
                className={`text-center m-2 bg-black text-white text-decoration-none ${hero.button}`}
              >
                Catálogo
              </a>
            </div>
          </div>
          <div className={`d-none d-lg-block ${hero.slider}`}>
            <SliderHero images={images} />
          </div>
        </div>
      </section>

      <a
        className="text-center text-light fw-bold bg-black d-flex justify-content-center mb-5"
        href="#catalogo"
      >
        <img src={arrow} alt="arrow-down" />
      </a>
    </>
  );
};

export default Hero;
