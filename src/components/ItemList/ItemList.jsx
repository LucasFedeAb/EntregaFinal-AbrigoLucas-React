import Item from "../Item/Item.jsx";
import "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div className="container px-4 px-lg-5 mt-5 mb-5">
      <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products?.map((product) => {
          return <Item key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
