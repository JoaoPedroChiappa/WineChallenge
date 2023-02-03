import { SingleProduct } from "../../src/components/product/product-page";

const ProductPage = ({ data }) => <SingleProduct data={data} />;

export default ProductPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const wine_products = data.wine_products;

  const allPaths = wine_products.map((path) => {
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

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { wine_products } = await import("/data/data.json");
  const productData = wine_products.find((ev) => id === ev.id);

  return {
    props: { data: productData },
  };
}
