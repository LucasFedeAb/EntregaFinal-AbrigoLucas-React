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
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckOut from "../CheckOut/CheckOut";

const CheckOutContainer = () => {
  const [loading, setLoading] = useState(false);
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

  const { cart, totalPrice, newTotalPrice, clearCart, totalQuantity } =
    useCart();

  const navigate = useNavigate();

  //Generar orden de compra
  const createOrder = async (formData) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("es-ES");
    let fechaActual = new Date();
    let horaActual = fechaActual.toLocaleTimeString();

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
      newTotalPrice,
      totalQuantity,
      createdAt: formattedDate,
      horaActual,
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
        let textQuantity =
          totalQuantity > 1
            ? `${totalQuantity} productos`
            : `${totalQuantity} producto`;

        Swal.fire({
          icon: "success",
          html: `
          <h3>La order N° ${id}</h3>
          <h3>Se genero con éxito.</h3>
          <br/>
          <h5>Resumen de compra</h5>
          <p>Total compra: <strong>$${newTotalPrice}</strong></p>
          <p> ${textQuantity}</p>
          <p>Fecha de compra: <strong>${formattedDate}</strong>  - Hora: <strong>${horaActual}</strong></p>
          <h6>GRACIAS ${firstName.toUpperCase()} POR TU COMPRA !!</h6>
          `,
          confirmButtonText: "OK",
          confirmButtonColor: "green",
        });

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            const swalContainer = Swal.getPopup();
            swalContainer.style.width = "max-content";
            swalContainer.style.padding = "2%";
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Hay productos sin stock",
        });
      }
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          const swalContainer = Swal.getPopup();
          swalContainer.style.width = "max-content";
          swalContainer.style.padding = "2%";
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Error en la generacion de la orden",
      });
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
      : Swal.fire({
          icon: "error",
          title: `Los mails no coinciden`,
          showConfirmButton: false,
        });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
