const Footer = () => {
  return (
    <footer className="bg-dark py-4 mt-5">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0 text-white">Copyright © Wexis 2023</div>
          </div>
          <div className="col-auto">
            <a className="link-light small" href="#!">
              Instagram
            </a>
            <span className="text-white mx-1">·</span>
            <a className="link-light small" href="#!">
              Facebook
            </a>
            <span className="text-white mx-1">·</span>
            <a className="link-light small" href="#!">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
