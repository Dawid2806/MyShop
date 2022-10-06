import { Banner } from "../components/Banners/BannerBig";
import { Collection } from "../components/Collection/Collection";
import { dummyProducts } from "../dummyData";

const Home = () => {
  return (
    <>
      <Banner />
      {dummyProducts.map((section) => {
        return (
          <Collection
            key={section.category}
            category={section.category}
            categoryDescription={section.categoryDescription}
            items={section.items}
          />
        );
      })}
    </>
  );
};

export default Home;
