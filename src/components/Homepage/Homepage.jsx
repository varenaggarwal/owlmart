import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";
import heroImage from "./images/heroImage.jpg";
import logo from "../../assets/owl.png";
import { featuredCategories } from "../../database";

export function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alert-box text-center">
        Big Billion days till tommorow.{" "}
        <Link className="link-no-style link-text" to="/shop">
          Shop now!
        </Link>
      </div>

      <div className="hero">
        <div className="hero-logo">
          <img className="img-responsive" src={logo} />
        </div>
        <div className="hero-text">
          <h2>where pros gear up!</h2>
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/shop")}>
          Shop now
        </button>
      </div>
      <div className="shop-category">
        <h2>Featured Categories</h2>
        {featuredCategories.map((category) => {
          return <></>;
        })}
      </div>
    </div>
  );
}
