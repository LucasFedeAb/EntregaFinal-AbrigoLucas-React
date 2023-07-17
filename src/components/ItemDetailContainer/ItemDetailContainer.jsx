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

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Evitar la recarga personalizada cuando se hace clic en el botón de recarga
      if (!event.currentTarget.performance.navigation.type) {
        localStorage.removeItem("currentId");
      }
    };

    // Agregar el listener al evento beforeunload cuando el componente monta
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Remover el listener cuando el componente desmonta para evitar pérdida de memoria
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div>
        <PageTitle title={"Wexis | Detalle de producto"} />
        {loading ? (
          <Loading />
        ) : product ? (
          <ItemDetail {...product} />
        ) : (
          <Error404 />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
