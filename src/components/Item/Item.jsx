import StarWidget from "../StarWidget/StarWidget";
import ButtonCard from "../Buttons/ButtonCard";
import { Link } from "react-router-dom";
/* import { useState } from "react"; */
import styles from "./Item.module.css";

const Item = ({ category, id, img, name, price, section }) => {
  /* const [hover, setHover] = useState(false); */
  return (
    <div className={`${styles.list__container}`}>
      <article className={`${styles.list__card}`}>
        <span className={`${styles.list__tag}`}>{section}</span>
        <img src={img} alt={`${{ name }}`} className={`${styles.list__img}`} />
        <div className={`${styles.list__data}`}>
          <h3 className={`${styles.list__title}`}>{name}</h3>
          <StarWidget />
          <span className={`${styles.list__price}`}>${price}</span>
        </div>

        <Link to={`/Producto/${id}`}>
          <div className={`${styles.list__button}`}>
            <ButtonCard label={"Ver detalle"} textColor={"light"} bg={"dark"} />
          </div>
        </Link>
      </article>
    </div>
  );
};

export default Item;
