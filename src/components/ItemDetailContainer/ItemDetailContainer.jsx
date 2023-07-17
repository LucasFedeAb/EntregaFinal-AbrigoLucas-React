import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import { getProducts } from "../../../services/firebase/firebase/products";
import { useAsync } from "../../Hooks/useAsync";
import PageTitle from "../PageTitle/PageTitle";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState();

  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((querySnapshot) => {
        const fields = querySnapshot.data();
        const productAdapted = { id: querySnapshot.id, ...fields };
        setProduct(productAdapted);

        localStorage.setItem("currentId", itemId);
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  const getProductsDb = () => getProducts();
  const { data: products } = useAsync(getProductsDb, []);

  const productExists = products.some((product) => product.id === itemId);

  if (!productExists) {
    return navigate("*");
  }

  return (
    <div>
      {loading ? (
        <div>
          <PageTitle title={"Wexis | Detalle de producto"} />
          <Loading />
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};
export default ItemDetailContainer;
