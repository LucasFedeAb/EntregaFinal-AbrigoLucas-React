import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import navbar from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={`${navbar.heigth}`}>
      <nav
        className={`navbar navbar-dark bg-black fixed-top navbar-expand-md ${navbar.heigth}`}
      >
        <div className="container-fluid">
          <img
            className={`navbar-brand ${navbar.logo} `}
            href="#"
            src="https://i.ibb.co/YhQDvqc/logo.png"
            alt="logo"
          />

          <div
            className={`offcanvas ${navbar.offcanvas} offcanvas-start bg-black text-white`}
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
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-5 ">
                <li className="nav-item">
                  <Link className="nav-link text-info" to={"/"}>
                    INICIO
                  </Link>
                </li>
                <li className={`nav-item dropdown`}>
                  <a
                    className={`nav-link  text-light`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MODELOS
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <Link
                        className="dropdown-item bg-dark text-light"
                        to={"/category/hombre"}
                      >
                        Hombre
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item bg-dark text-light"
                        to={"/category/mujer"}
                      >
                        Mujer
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item bg-dark text-light"
                        to={"/category/smartwatch"}
                      >
                        Smartwatchs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={`d-flex `}>
            <CartWidget count={0} />

            <button
              className="navbar-toggler ms-3 "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon`} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
