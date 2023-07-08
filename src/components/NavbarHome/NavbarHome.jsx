import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import styles from "./NavbarHome.module.css";

const NavbarHome = ({
  dropdownOpen,
  categories,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <header className={`${styles.heigth}`}>
      <nav
        className={`navbar navbar-dark bg-black fixed-top navbar-expand-md ${styles.heigth} ${styles.dark}`}
      >
        <div className="container-fluid">
          <Link to={"/"}>
            <img
              className={`navbar-brand ${styles.logo} `}
              src="https://i.ibb.co/YhQDvqc/logo.png"
              alt="logo"
            />
          </Link>

          <div
            className={`offcanvas ${styles.offcanvas} offcanvas-start bg-black text-white`}
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Wexis
              </h5>
            </div>
            <div className="offcanvas-body ">
              <ul
                className={`navbar-nav justify-content-center flex-grow-1 pe-5 `}
              >
                <li className="nav-item">
                  <Link className="nav-link text-info" to={"/"}>
                    INICIO
                  </Link>
                </li>
                <li
                  className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`nav-link  text-light dropdown-toggle`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MODELOS
                  </a>
                  <ul
                    className={`dropdown-menu dropdown-menu-dark bg-black ${
                      dropdownOpen ? "show" : ""
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {categories?.map((category) => (
                      <li key={category.id}>
                        <Link
                          className="dropdown-item text-light text-capitalize"
                          to={`/categories/${category.id}`}
                        >
                          {category.description}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light " href="#history">
                    NOSOTROS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`d-flex `}>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>

            <button
              className="navbar-toggler ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${styles.toggler}`} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHome;
