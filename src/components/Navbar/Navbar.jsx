import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import styles from "./Navbar.module.css";
/* import TogglerCart from "../TogglerCart/TogglerCart.jsx"; */
import CartToggler from "../CartToggler/CartToggler.jsx";
import truck from "./assets/truck.svg";
/* import CartInfo from "../CartInfo/CartInfo.jsx"; */

const Navbar = ({
  dropdownOpen,
  categories,
  handleMouseEnter,
  handleMouseLeave,
  showHomeNavbar,
  dropdownResponsiveOpen,
  handleMouseResponsiveEnter,
  handleMouseResponsiveLeave,
}) => {
  return (
    <>
      <header className={` ${styles.heigth}`}>
        <nav
          className={`navbar navbar-dark bg-black fixed-top  navbar-expand-none ${styles.heigth} ${styles.dark}`}
        >
          <aside className="d-flex flex-row justify-content-center bg-info  text-center w-100">
            <img className="me-2" src={truck} alt="truck" />
            <small>
              <strong>Envío gratis</strong> en compras de{" "}
              <strong>$8.000</strong> o más !!!
            </small>
          </aside>
          <div className="container-fluid">
            <Link to={"/"}>
              <img
                className={`navbar-brand me-0 pe-0 ${styles.logo} `}
                src="https://i.ibb.co/YhQDvqc/logo.png"
                alt="logo"
              />
            </Link>
            <div className=" d-none d-md-block">
              <ul
                className={`d-flex flex-row justify-content-center flex-grow-1 pe-5 `}
              >
                <li className="nav-item pe-3" data-bs-dismiss="offcanvas">
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
                    className={`nav-link text-light dropdown-toggle`}
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
                      <li key={category.id} data-bs-dismiss="offcanvas">
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
                {showHomeNavbar == true && (
                  <li className="nav-item ps-3">
                    <a className="nav-link text-light " href="#history">
                      NOSOTROS
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div className={`d-md-none`}>
              <div
                className={`offcanvas ${styles.offcanvas} offcanvas-start bg-black text-white`}
                tabIndex={-1}
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header ">
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
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link className="nav-link text-info" to={"/"}>
                        INICIO
                      </Link>
                    </li>
                    <li
                      className={`nav-item dropdown ${
                        dropdownResponsiveOpen ? "show" : ""
                      }`}
                      onMouseEnter={handleMouseResponsiveEnter}
                      onMouseLeave={handleMouseResponsiveLeave}
                    >
                      <a
                        className={`nav-link text-light dropdown-toggle`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        MODELOS
                      </a>
                      <ul
                        className={`dropdown-menu dropdown-menu-dark bg-black ${
                          dropdownResponsiveOpen ? "show" : ""
                        }`}
                        onMouseEnter={handleMouseResponsiveEnter}
                        onMouseLeave={handleMouseResponsiveLeave}
                      >
                        {categories?.map((category) => (
                          <li key={category.id} data-bs-dismiss="offcanvas">
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
                    {showHomeNavbar == true && (
                      <li className="nav-item">
                        <a className="nav-link text-light " href="#history">
                          NOSOTROS
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className={`d-flex align-items-center `}>
              {/* TogglerCart */}
              {/* <nav
              className={`navbar navbar-expand-none ${styles.heigth} ${styles.dark}`}
            > */}
              <div>
                <div
                  className={`offcanvas offcanvas-expand-none bg-black ${styles.offcanvas}  offcanvas-end`}
                  tabIndex={-1}
                  id="offcanvasCart"
                  aria-labelledby="offcanvasCartLabel"
                >
                  <div className="offcanvas-header bg-black text-light d-flex align-items-center">
                    <div className="ps-4">
                      <h5
                        className="offcanvas-title ps-5 ms-5"
                        id="offcanvasCartLabel"
                      >
                        Mi Carrito
                      </h5>
                    </div>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body ">
                    <CartToggler />
                  </div>
                </div>
                <div className={`d-flex align-items-center `}>
                  <button
                    className="navbar-toggler ms-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                    aria-label="Toggle navigation"
                  >
                    <CartWidget />
                  </button>
                </div>
              </div>
              {/* </nav> */}
              {/* <Link to={"/cart"}>
              <CartWidget />
            </Link> */}

              <button
                className="navbar-toggler ms-2 d-md-none"
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
    </>
  );
};

export default Navbar;
