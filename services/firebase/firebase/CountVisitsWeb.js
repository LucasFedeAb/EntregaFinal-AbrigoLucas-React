import { useEffect } from "react";
import { updateDoc, doc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig";
/* import db from ""; // Asegúrate de importar db desde el módulo donde lo exportas */

const CountVisitsWeb = () => {
  useEffect(() => {
    // Obtén una referencia al documento "contador" en Firestore
    const contadorRef = doc(db, "visits", "count");

    // Incrementa el contador de visitas
    updateDoc(contadorRef, {
      valor: increment(1),
    });
  }, []);

  return null; // Este componente no renderiza nada en la interfaz de usuario
};

export default CountVisitsWeb;
