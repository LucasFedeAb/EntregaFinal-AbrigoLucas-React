import { Link } from "react-router-dom";
import styles from "./Story.module.css";

const Story = () => {
  return (
    <>
      <section
        className={`${styles.section} ${styles.container} `}
        id="history"
      >
        <div className={`${styles.story__container} ${styles.grid}`}>
          <div>
            <h2 className={`${styles.section__title} `}>Nuestra historia</h2>
            <h1 className={`${styles.story__title} `}>
              Reloj inspirador de <br /> este año
            </h1>
            <p className={`${styles.story__description} `}>
              Con una pasión compartida por los relojes, creamos un espacio
              virtual donde la elegancia y la funcionalidad se combinan.
              Ofrecemos una cuidada selección de relojes de alta calidad, con
              marcas reconocidas y artesanos expertos. Nuestra atención al
              cliente excepcional y nuestro compromiso con la excelencia nos han
              llevado al éxito. Únete a nuestra historia y encuentra el reloj
              perfecto para cada ocasión en nuestra tienda.
            </p>
            <Link to={`/Producto/gdbfvXVqjF3nYTlrwEw1`}>
              <div className={` btn btn-dark `}>Descubrir</div>
            </Link>
          </div>
          <div className={`${styles.story__images} `}>
            <img
              src="https://i.ibb.co/z6dxcMQ/story.png"
              alt="imgStory"
              className={`${styles.story__img} `}
            />

            <div className={` ${styles.story__square} `} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
