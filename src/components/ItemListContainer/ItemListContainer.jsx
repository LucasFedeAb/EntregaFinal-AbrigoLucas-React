import { getProducts, getProductByCategory } from "../AsyncMock/asyncMock.js";
import { useAsync } from "../../Hooks/useAsync";
import { useParams } from "react-router-dom";
import Hero from "../Hero/HeroContainer.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();

  let filter = false;

  const getFunction = categoryId
    ? (() => {
        filter = true;
        return getProductByCategory;
      })()
    : getProducts;

  const { data: products, loading } = useAsync(
    () => getFunction(categoryId),
    [categoryId, filter]
  );

  const images = products ? products.map((product) => product.img) : [];

  /* loading === true && (
    <div className="style pt-2">
      <Loading />
    </div>
  ); */

  return (
    <div>
      {!filter && <Hero images={images} />}
      {!filter ? (
        <div id="catalogo" className="pt-5">
          <h1 className="p-5 text-center">{title}</h1>
        </div>
      ) : (
        <h1 className="p-5 text-center text-uppercase">{categoryId}</h1>
      )}
      <div className="style pt-2">
        {loading === true ? <Loading /> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
