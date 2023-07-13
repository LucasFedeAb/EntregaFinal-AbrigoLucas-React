import PageTitle from "../PageTitle/PageTitle";
import Hero from "./Hero/Hero";
import FeaturedList from "./FeaturedList/FeaturedList";
import Story from "./Story/Story";

const HomeComponents = ({ images, featuredProducts, loading }) => {
  return (
    <>
      <PageTitle title={"Wexis | Inicio"} />
      <div className="">
        <Hero images={images} />
        <FeaturedList featuredProducts={featuredProducts} loading={loading} />
        <Story />
      </div>
    </>
  );
};

export default HomeComponents;
