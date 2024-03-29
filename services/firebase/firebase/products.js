import {
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
  const productsRef = !categoryId
    ? collection(db, "products")
    : query(collection(db, "products"), where("category", "==", categoryId));

  return getDocs(productsRef)
    .then((querySnapshot) => {
      const productsAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });
      return productsAdapted;
    })
    .catch((error) => {
      return error;
    });
};

export const getProductsBySection = (section) => {
  const productsRef = query(
    collection(db, "products"),
    where("section", "==", section)
  );

  return getDocs(productsRef)
    .then((querySnapshot) => {
      const productsAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });
      return productsAdapted;
    })
    .catch((error) => {
      return error;
    });
};

export const getProductById = (productId) => {
  const productDocRef = doc(db, "products", productId);

  return getDoc(productDocRef)
    .then((docSnapshot) => {
      const productData = docSnapshot.data();
      return { id: docSnapshot.id, ...productData };
    })
    .catch((error) => {
      return error;
    });
};
