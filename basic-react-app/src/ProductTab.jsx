import Product from "./product";

function ProductTab() {
  return (
    <>
      <Product title="phone" price={30000}></Product>
      <Product title="laptop" price={40000}></Product>
      <Product title="pen" price={10}></Product>
    </>
  );
}

export default ProductTab;
