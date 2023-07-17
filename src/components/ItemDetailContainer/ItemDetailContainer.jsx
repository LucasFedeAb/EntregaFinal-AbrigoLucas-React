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
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  const navigate = useNavigate();

  const getProductById = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      const querySnapshot = await getDoc(productRef);
      if (querySnapshot.exists()) {
        const fields = querySnapshot.data();
        const productAdapted = { id: querySnapshot.id, ...fields };
        setProduct(productAdapted);
      } else {
        navigate("*");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById(itemId);
  }, [itemId]);

  const getProductsDb = () => getProducts();
  const { data: products } = useAsync(getProductsDb, []);

  useEffect(() => {
    if (products) {
      const productExists = products.some((product) => product.id === itemId);
      if (!productExists) {
        navigate("*");
      }
    }
  }, [itemId, products, navigate]);

  return (
    <div>
      <PageTitle title={"Wexis | Detalle de producto"} />
      {loading ? <Loading /> : product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
