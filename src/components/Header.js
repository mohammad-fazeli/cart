import React from "react";
import { HeaderStyle } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">logo</div>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>3</span>
      </div>
    </HeaderStyle>
  );
};

export default Header;
