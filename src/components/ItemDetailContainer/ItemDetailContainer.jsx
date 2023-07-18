import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
/* import { getProducts } from "../../../services/firebase/firebase/products";
import { useAsync } from "../../Hooks/useAsync"; */
import PageTitle from "../PageTitle/PageTitle";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import Error404 from "../Error404/Error404";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
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
        localStorage.setItem("currentId", itemId);
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

  return (
    <>
      <section>
        {loading ? (
          <div>
            <PageTitle title={"Wexis | Detalle de producto"} />
            <Loading />
          </div>
        ) : (
          <ItemDetail {...product} />
        )}
      </section>
    </>
  );
};

export default ItemDetailContainer;
