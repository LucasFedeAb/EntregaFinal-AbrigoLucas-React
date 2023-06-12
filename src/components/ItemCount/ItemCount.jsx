import { useState } from "react";
import ButtonCard from "../Buttons/ButtonCard";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const increment = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  return (
    <div className="me-5">
      <h5 className="ms-3">{count}</h5>

      <div className="">
        <ButtonCard
          label="-"
          colorHover="dark"
          font="bold"
          onClick={decrement}
        />
        <ButtonCard
          label="Agregar al carrito"
          colorHover="success"
          onClick={() => onAdd(count)}
        />
        <ButtonCard
          label="+"
          colorHover="dark"
          font="bold"
          onClick={increment}
        />
      </div>
    </div>
  );
};

export default ItemCount;
