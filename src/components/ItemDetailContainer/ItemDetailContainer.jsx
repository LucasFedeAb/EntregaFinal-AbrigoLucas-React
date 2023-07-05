/* import { useEffect, useState } from "react"; */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore"; //Obtener un solo documento con getDoc // doc genera referencia al documento
import { db } from "../../../services/firebase/firebaseConfig";
import PageTitle from "../PageTitle/PageTitle";
/* import { getProductById } from "../AsyncMock/asyncMock"; */
import ItemDetail from "../ItemDetail/ItemDetail";
/* import { useAsync } from "../../Hooks/useAsync"; */
import Loading from "../Loading/Loading";
/* import RelatedProducts from "../RelatedProducts/RelatedProducts"; */

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((querySnapshot) => {
        const fields = querySnapshot.data(); //almacenamos los datos de todos los campos de cada dato
        const productAdapted = { id: querySnapshot.id, ...fields }; //retornamos un objetos con todos los datos, el id por separado ya que no se enceuntra dentro de data, esta separado
        setProduct(productAdapted);

        localStorage.setItem("currentId", itemId);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  /* loading === true && (
    <div className="style pt-2">
      <Loading />
    </div>
  ); */
  /* const {
    data: product,
    error,
    loading,
  } = useAsync(() => getProductById(itemId), [itemId]); */

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

      {/* <RelatedProducts {...product} /> */}
    </div>
  );
};

export default ItemDetailContainer;
