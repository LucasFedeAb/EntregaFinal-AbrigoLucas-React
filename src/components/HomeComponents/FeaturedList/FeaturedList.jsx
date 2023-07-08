import Featured from "../Featured/Featured";

const FeaturedList = ({ featuredProducts }) => {
  return (
    <div className="container px-4 px-lg-5 mb-5 pb-5" id="featured">
      <div className="d-flex justify-content-center ">
        <h4
          className={`pt-3 text-center text-uppercase border border-warning border-bottom-0 border-end-0 border-start-0 border-2 ps-5 pe-5`}
        >
          D e s t a c á d o s
        </h4>
      </div>

      <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {featuredProducts?.map((product) => {
          return <Featured key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedList;
