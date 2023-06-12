import cart from "./assets/bag-fill.svg";

const CartWidget = ({ count }) => {
  return (
    <div>
      <button
        className={`btn btn-outline-dark d-flex h-75 col-lg-h-100 ps-3 pe-3 me-1 justify-content-center align-items-center rounded `}
      >
        <p className={`badge bg-dark text-light mt-1 `}>{count}</p>
        <img className="mt-3 me-1" src={cart} alt="cart" />
      </button>
    </div>
  );
};

export default CartWidget;
