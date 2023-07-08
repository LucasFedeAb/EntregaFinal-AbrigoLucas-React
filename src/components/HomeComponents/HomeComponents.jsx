import PageTitle from "../PageTitle/PageTitle";
import Hero from "./Hero/Hero";
import FeaturedList from "./FeaturedList/FeaturedList";
import Story from "./Story/Story";
/* import Hero from "../Hero/Hero";
import FeaturedList from "../FeaturedList/FeaturedList";
import Story from "./Story/Story"; */

const HomeComponents = ({ images, featuredProducts }) => {
  return (
    <>
      <PageTitle title={"Wexis | Inicio"} />
      <Hero images={images} />
      <FeaturedList featuredProducts={featuredProducts} />
      <Story />
    </>
  );
};

export default HomeComponents;
