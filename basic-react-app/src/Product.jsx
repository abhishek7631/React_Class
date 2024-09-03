import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    "8,000 DPI",
    "intuitive surface",
    "designed for iPad pro",
    "wireless",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
    </div>
  );
}

export default Product;
