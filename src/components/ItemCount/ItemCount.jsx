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
    <div className="me-5 justify-content-between align-items-center">
      <div className="d-flex mb-2 ">
        <ButtonCard
          label="-"
          colorHover="dark"
          font="bold"
          onClick={decrement}
        />
        <h5 className=" ps-2 pt-2 pe-2">{count}</h5>
        <ButtonCard
          label="+"
          colorHover="dark"
          font="bold"
          onClick={increment}
        />
      </div>
      <ButtonCard
        label="Agregar al carrito"
        colorHover="success"
        onClick={() => onAdd(count)}
      />
    </div>
  );
};

export default ItemCount;
