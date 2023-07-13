import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <>
      <section className={`${styles.section} ${styles.container} `}>
        <div className={`${styles.newsletter__bg} bg-dark ${styles.flex} `}>
          <div>
            <h2 className={`${styles.newsletter__title} text-light`}>
              Suscirbirse a nuestro <br /> Newsletter
            </h2>
            <p className={`${styles.newsletter__description} text-light`}>
              No te pierdas sus descuentos. Suscríbase a nuestro boletín de
              correo electrónico para obtener las mejores ofertas, descuentos,
              cupones, regalos y mucho más.
            </p>
          </div>
          <form className={`${styles.newsletter__subscribe}`}>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-dark "
            />
            <button className="btn btn-secondary">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
