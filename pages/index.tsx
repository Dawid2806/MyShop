import { Collection } from "../components/Collection/Collection";
import { dummyProducts } from "../dummyData";

const Home = () => {
  console.log(dummyProducts);

  return (
    <>
      {dummyProducts.map(
        (section: { category: any; CategoryDescription: any; items: any }) => {
          return (
            <Collection
              key={section.category}
              sectionTitle={section.category}
              sectionDescription={section.CategoryDescription}
              sectionItems={section.items}
            />
          );
        }
      )}
    </>
  );
};

export default Home;
