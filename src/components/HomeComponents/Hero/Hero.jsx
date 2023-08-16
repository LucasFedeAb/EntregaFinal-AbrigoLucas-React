import style from "../Hero/Hero.module.css";
import SliderHero from "../SliderHero/SliderHero";
import arrow from "./assets/chevron-double-down.svg";

const Hero = ({ images }) => {
  return (
    <>
      <section
        className={`container-fluid align-items-center bg-black text-light`}
      >
        <div
          className={`row flex-column-reverse flex-lg-row align-items-center container-fluid`}
        >
          <div className={`col-lg-4 align-items-center `}>
            <h1
              className={`fw-bold text-center text-lg-start ps-5 pt-5 pe-5 pb-3 ps-lg-0 pt-lg-0 pe-lg-0 pb-lg-0`}
            >
              LLEVAMOS EL TIEMPO A TUS MANOS
            </h1>
            <p className={`d-none d-lg-block`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ratione dicta expedita vero corporis deserunt tenetur enim, saepe
              rem, quo reiciendis sapiente explicabo dolores iusto libero quae
              fugiat voluptates hic.
            </p>
            <div
              className={`d-flex justify-content-center justify-content-lg-start m-4 m-lg-0`}
            >
              <a
                href="#featured"
                className={`text-center m-2 bg-light text-black text-decoration-none ${style.button}`}
              >
                Explorar
              </a>

              <a
                href="#catalogo"
                className={`text-center m-2 bg-black text-white text-decoration-none ${style.button}`}
              >
                Catálogo
              </a>
            </div>
          </div>
          <div className={`col-lg-4 d-flex justify-content-center `}>
            <img
              className={`ps-4 ${style.heroImg}`}
              src="https://i.ibb.co/2KYsMxJ/hero.png"
              alt="hero"
            />
          </div>
          <div className="col-lg-4  d-none d-lg-block">
            <div
              className={` d-flex justify-content-end align-items-center pt-4 `}
            >
              <SliderHero images={images} />
            </div>
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
