import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cart }) => {
  return (
    <HeaderStyle>
      <Link to="/">
        <div className="logo">logo</div>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length !== 0 ? <span>{cart.length}</span> : ""}
        </div>
      </Link>
    </HeaderStyle>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
