import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig.js";
import Navbar from "../Navbar/Navbar.jsx";

const NavbarContainer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [showHomeNavbar, setShowHomeNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowHomeNavbar(false);
    } else {
      setShowHomeNavbar(true);
    }
  }, [location]);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const createCategories = async () => {
      try {
        const categoriesRef = collection(db, "categories");
        const querySnapshot = await getDocs(categoriesRef);
        const categoriesAdapted = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesAdapted);
      } catch (error) {
        console.error("Error al obtener las categorías", error);
      }
    };
    createCategories();
  }, []);

  return (
    <>
      <Navbar
        dropdownOpen={dropdownOpen}
        categories={categories}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        showHomeNavbar={showHomeNavbar}
      />
    </>
  );
};

export default NavbarContainer;
