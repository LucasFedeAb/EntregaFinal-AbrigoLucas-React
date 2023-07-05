import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useCart } from "../../Hooks/useCart";
import { db } from "../../../services/firebase/firebaseConfig";

import { useNotification } from "../../Notification/NotificationService.jsx";
import { useState } from "react";

/* import { useNavigate } from "react-router-dom"; */
import Loading from "../Loading/Loading";
import CheckOut from "../Checkout/Checkout";
import SweetAlert from "../SweetAlert/SweetAlert";

const CheckOutContainer = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    city: "",
    address: "",
    province: "",
    zip: "",
    phone: "",
  });

  const { cart, totalPrice, clearCart, totalQuantity } = useCart();
  const { setNotification } = useNotification();
  /* const navigate = useNavigate();
  let succesOrder = false; */
  let idOrder;
  //Generar orden de compra
  const createOrder = async (formData) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("es-ES");
    const {
      firstName,
      lastName,
      email,
      confirmEmail,
      city,
      address,
      province,
      zip,
      phone,
    } = formData;

    setLoading(true);
    const objOrder = {
      buyer: {
        firstName,
        lastName,
        email,
        confirmEmail,
        city,
        address,
        province,
        zip,
        phone,
      },
      items: cart,
      totalPrice,
      totalQuantity,
      createdAt: formattedDate,
    };

    try {
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);

      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);

        setShowAlert(true);
        /* setNotification(
          "success",
          "La orden fue generada correctamente, el id es: " + id
        ); */

        clearCart();
        /* setTimeout(() => {
          navigate("/");
        }, 2500); */
      } else {
        setNotification("error", "hay productos que no tienen stock");
      }
    } catch (error) {
      setNotification("error", "hubo un error en la generacion de la orden");
    } finally {
      setLoading(false);
    }
  };

  //Formulario orden de compra
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formData.email === formData.confirmEmail
      ? createOrder(formData)
      : alert("Los mails no coinciden");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {showAlert && (
        <SweetAlert
          createOrder={createOrder}
          formData={formData}
          idOrder={idOrder}
        />
      )}
      <CheckOut
        createOrder={createOrder}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default CheckOutContainer;
