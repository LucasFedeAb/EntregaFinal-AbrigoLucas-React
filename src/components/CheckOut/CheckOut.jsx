const CheckOut = ({
  createOrder,
  formData,
  handleFormSubmit,
  handleInputChange,
}) => {
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
  return (
    <>
      <article className="d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className="p-5">GENERAR ORDEN DE COMPRA</h1>
        <form className="row g-3 needs-validation" onSubmit={handleFormSubmit}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Por favor ingrese su nombre.</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese su apellido.
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese un email válido.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmEmail" className="form-label">
              Confirmar Email
            </label>
            <input
              type="email"
              className="form-control"
              id="confirmEmail"
              name="confirmEmail"
              value={confirmEmail}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese un email válido.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese su apellido.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese su apellido.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="province" className="form-label">
              Provincia
            </label>
            <select
              className="form-select"
              id="province"
              name="province"
              value={province}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccione una provincia</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Formosa">Formosa</option>
              <option value="Mendoza">Mendoza</option>
            </select>
            <div className="invalid-feedback">
              Por favor seleccione una provincia.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              value={zip}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese su apellido.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Realizar compra
          </button>
        </form>
      </article>
    </>
  );
};
export default CheckOut;
