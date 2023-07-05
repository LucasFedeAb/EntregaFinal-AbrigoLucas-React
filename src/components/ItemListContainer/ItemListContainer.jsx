/* import { useState, useEffect } from "react"; */
import { useParams } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle.jsx";
import Hero from "../Hero/Hero.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

import { useAsync } from "../../Hooks/useAsync.js";
import { getProducts } from "../../../services/firebase/firebase/products.js";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();

  const getProductsWithCategory = () => getProducts(categoryId);
  /* const [images, setImages] = useState([]); */

  const {
    data: products,
    error,
    loading,
  } = useAsync(getProductsWithCategory, [categoryId]);

  if (error) {
    return <h1>Hubo un error al obtener los productos</h1>;
  }

  const images = products ? products.map((product) => product.img) : [];

  return (
    <main>
      {!categoryId ? (
        <div>
          <PageTitle title={"Wexis | Inicio"} />
          <Hero images={images} />
          <div id="catalogo" className="pt-4 ">
            <h1 className="p-5 text-center">{title}</h1>
          </div>
        </div>
      ) : (
        <div>
          <PageTitle title={`Wexis | Categoría: ${categoryId}`} />
          <h1 className="p-5 text-center text-uppercase">{categoryId}</h1>
        </div>
      )}
      <div className="style pt-2 ">
        {loading === true ? <Loading /> : <ItemList products={products} />}
      </div>
    </main>
  );
};

export default ItemListContainer;
