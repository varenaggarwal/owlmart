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
        Big Billion days till midnight.{" "}
        <Link className="link-no-style link-text" to="/shop">
          Shop now!
        </Link>
      </div>

      <div className="hero">
        <div className="hero-logo">
          <img className="img-responsive" src={logo} />
        </div>
        <div className="hero-text">
          <h2>where tennis pros gear up!</h2>
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/shop")}>
          Shop now
        </button>
      </div>
      <div className="shop-category">
        <h2>Featured Categories</h2>
        <div className="spacer-1rem"></div>
        <div className="category-menu-container">
          {featuredCategories.map((category) => (
            <div
              key={category.name}
              onClick={() => {
                navigate("/shop");
              }}
            >
              <div className="banner-card">
                <div>
                  <img
                    className="img-responsive"
                    src={category.img}
                    alt={category.name}
                  />
                </div>
                <div className="banner-card-text-container text-center">
                  <div className="heading">{category.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
