import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAsync } from "../../Hooks/useAsync";
import {
  getProducts,
  getProductsBySection,
} from "../../../services/firebase/firebase/products";
import PageTitle from "../PageTitle/PageTitle.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading";
import Newsletter from "../HomeComponents/Newsletter/Newsletter";
import HomeComponents from "../HomeComponents/HomeComponents";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();

  const navigate = useNavigate();

  const getProductsWithCategory = () => getProducts(categoryId);

  const { data: products } = useAsync(getProductsWithCategory, [categoryId]);

  const section = "destacado";
  const getProductsFeatured = () => getProductsBySection(section);
  const { data: featuredProducts, loading } = useAsync(getProductsFeatured, [
    section,
  ]);

  /* const orderedProducts = products.tosorted() */
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(categoryId);

      if (!products || products.length === 0) {
        navigate("/*");
      }
    };

    fetchData();
  }, [categoryId]);

  const images =
    featuredProducts && featuredProducts.length > 0
      ? featuredProducts.map((product) => ({
          id: product.id,
          img: product.img,
        }))
      : [];

  /* const images =
      featuredProducts && featuredProducts.length > 0
        ? featuredProducts.map((product) => ({
            id: product.id,
            img: product.img,
          }))
        : []; */

  useEffect(() => {
    // Cuando el componente se monta, llevar al usuario al inicio del detalle del producto
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <main>
        {!categoryId ? (
          <>
            <HomeComponents
              images={images}
              featuredProducts={featuredProducts}
              loading={loading}
            />

            <div
              id="catalogo"
              className="d-flex justify-content-center pt-5 mt-5"
            >
              <h1
                className={`pt-3 pb-3 ps-5 pe-5 text-center text-uppercase border border-warning border-bottom-0 border-end-0 border-start-0 border-2 `}
              >
                {title}
              </h1>
            </div>
            <div className="pt-2">
              {loading === true ? (
                <Loading />
              ) : (
                <ItemList products={products} />
              )}
            </div>
            <Newsletter />
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center pt-5 mt-5">
              <PageTitle
                title={`Wexis | Categoría: ${categoryId.toUpperCase()}`}
              />
              <h1 className="pt-3 pb-3 ps-5 pe-5 text-center text-uppercase border border-warning border-bottom-0 border-end-0 border-start-0 border-2">
                {categoryId}
              </h1>
            </div>
            <div className="pt-2">
              {loading === true ? (
                <Loading />
              ) : (
                <ItemList products={products} />
              )}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default ItemListContainer;
