import Product from "./product";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="phone"
        price={30000}
        features={options}
        features2={options2}
      ></Product>
      {/* <Product title="laptop" price={40000}></Product>
      <Product title="pen" price={10}></Product> */}
    </>
  );
}

export default ProductTab;
