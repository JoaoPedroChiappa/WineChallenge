import { SingleProduct } from "../../src/components/product/product-page";
import Data from "../../data/data.json";

const { wineProducts } = Data;
const ProductPage = ({ data }) => <SingleProduct data={data} />;

export default ProductPage;

export function getStaticPaths() {
  const allPaths = wineProducts.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { id } = context.params;
  const productData = wineProducts.find((prod) => id === prod.id);

  return {
    props: { data: productData },
  };
}
