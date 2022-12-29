import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
// import Custom from "./custom";

function Header({ setShow, size }) {
  return (

    <nav>
      <div className="nav_box">
        <Link to="/" className="my_shop" onClick={() => setShow(true)}>
          MOBILE HUB
        </Link>
        <Link to="input">
          <button className="search_brand" onClick={() => setShow(true)}>Search your Brand</button>
        </Link>


        <Link to="/cart">
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
