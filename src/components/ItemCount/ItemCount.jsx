import { useState } from "react";
import ButtonCard from "../Buttons/ButtonCard";
import { useParams } from "react-router-dom";

const ItemCount = ({ stock, initialCount = 1, onAdd }) => {
  const [count, setCount] = useState(initialCount);
  const { itemId } = useParams();

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="me-5 justify-content-between align-items-center">
      <div className="d-flex mb-2">
        <ButtonCard
          label="-"
          colorHover="dark"
          font="bold"
          onClick={decrement}
        />
        <button className=" btn pe-none fw-bolder">{count}</button>
        <ButtonCard
          label="+"
          colorHover="dark"
          font="bold"
          onClick={increment}
        />
      </div>
      {itemId && (
        <ButtonCard
          label="Agregar al carrito"
          colorHover="success"
          onClick={() => onAdd(count)}
        />
      )}
    </div>
  );
};

export default ItemCount;
