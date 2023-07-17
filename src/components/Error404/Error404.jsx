import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center vh-100 ">
        <div></div>
        <div>
          <h1>404 :(</h1>
          <p>
            No pudimos encontrar la página que estabas buscando. puede haber
            sido movido, o simplemente no existe.
          </p>
          <Link to={"/"}>
            <a className="btn btn-primary" href="#">
              Volver al inicio
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error404;
