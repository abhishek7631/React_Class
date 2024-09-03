import "./Product.css";
import Price from "./Price";

function Product({ title }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Description</p>
      <Price></Price>
    </div>
  );
}

export default Product;
