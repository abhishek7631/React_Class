import "./Navigation.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/explore"
          >
            Explore
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
