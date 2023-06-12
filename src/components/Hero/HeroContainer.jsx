import HeroContainer from "./HeroContainer.module.css";
import SliderHero from "../Slider/Slider.jsx";

const Hero = ({ images }) => {
  return (
    <section
      className={`d-flex d-flex-column justify-content-center align-items-center ${HeroContainer.container}`}
    >
      <div
        className={`d-flex d-flex-column align-items-center justify-content-between pe-5 ${HeroContainer.heroImg}`}
      >
        <div className={` justify-content-start ps-5 ${HeroContainer.title}`}>
          <h1 className={`fw-bold`}>LLEVAMOS EL TIEMPO A TUS MANOS</h1>
          <p className={``}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            ratione dicta expedita vero corporis deserunt tenetur enim, saepe
            rem, quo reiciendis sapiente explicabo dolores iusto libero quae
            fugiat voluptates hic.
          </p>
          <div className={`d-flex`}>
            <button
              className={`text-center m-2 bg-light text-black ${HeroContainer.button}`}
            >
              Explorar
            </button>

            <button
              className={`text-center m-2 bg-black text-white ${HeroContainer.button}`}
            >
              Catalogo
            </button>
          </div>
        </div>
        <SliderHero images={images} />
      </div>
    </section>
  );
};

export default Hero;
