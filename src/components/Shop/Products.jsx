import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className="text-white my-8 mx-auto text-center uppercase">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Buy your favorite products
      </h2>
      <ul className="list-none m-0 p-0">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
