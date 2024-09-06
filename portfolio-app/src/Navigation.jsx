import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <h1>Abhishek,</h1>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/internship" className="nav-link">
            Internship
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-link">
            Project
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
