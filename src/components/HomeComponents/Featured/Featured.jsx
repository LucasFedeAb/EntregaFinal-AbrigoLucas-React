import styles from "./Feactured.module.css";
import ButtonCard from "../../Buttons/ButtonCard";
import { Link } from "react-router-dom";

const Featured = ({ section, img, name, price, id, tag = "sale" }) => {
  return (
    <>
      <section className={`${styles.section} ${styles.container}`}>
        <div className={`${styles.featured__container}`}>
          <article className={`${styles.featured__card}`}>
            <span className={`${styles.featured__tag}`}>{tag}</span>
            <img
              src={img}
              alt={`${{ name }}`}
              className={`${styles.featured__img}`}
            />
            <div className={`${styles.featured__data}`}>
              <h3 className={`${styles.featured__title}`}>{name}</h3>
              <span className={`${styles.featured__price}`}>${price}</span>
            </div>

            <Link to={`/Producto/${id}`}>
              <div className={`${styles.featured__button}`}>
                <ButtonCard label={"Ver detalle"} colorHover={"dark"} />
              </div>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default Featured;
