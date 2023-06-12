/* import { useEffect, useState } from "react"; */
import { useParams } from "react-router-dom";
import { getProductById } from "../AsyncMock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useAsync } from "../../Hooks/useAsync";
import Loading from "../Loading/Loading";
/* import RelatedProducts from "../RelatedProducts/RelatedProducts"; */

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const {
    data: product,
    error,
    loading,
  } = useAsync(() => getProductById(itemId), [itemId]);

  return (
    <div>
      {loading ? <Loading /> : <ItemDetail {...product} />}

      {/* <RelatedProducts {...product} /> */}
    </div>
  );
};

export default ItemDetailContainer;
