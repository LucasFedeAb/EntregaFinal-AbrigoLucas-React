import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import PageTitle from "../PageTitle/PageTitle";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState();
  const [productNotFound, setProductNotFound] = useState(false);

  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          throw new Error("Error 404: not found");
        }
        if (querySnapshot.exists()) {
          const fields = querySnapshot.data();
          const productAdapted = { id: querySnapshot.id, ...fields };
          setProduct(productAdapted);

          localStorage.setItem("currentId", itemId);
        } else {
          setProductNotFound(true);
        }
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (productNotFound) {
    return navigate("/*");
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
