import React from "react";
import { connect } from "react-redux";
import { HeaderStyle } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cart }) => {
  return (
    <HeaderStyle>
      <div className="logo">logo</div>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        {cart.length !== 0 ? <span>{cart.length}</span> : ""}
      </div>
    </HeaderStyle>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
