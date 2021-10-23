import React, { useState, useEffect } from "react";
import { Postitemstyle } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({
  model,
  Rated,
  price,
  Discount,
  availability,
  image,
}) => {
  const [Oprice, setOprice] = useState(0);
  useEffect(() => {
    if (Discount !== 0) {
      const p = (price * Discount) / 100;
      setOprice(price + p);
    }
  }, [Discount, price]);

  return (
    <Postitemstyle>
      {Discount === 0 ? null : <div className="discount">{Discount}%</div>}
      <img src={image} alt="" />
      <div className="text">
        <div className="model">{model}</div>
        <div className="reted">
          <FontAwesomeIcon icon={faStar} className="star" />
          {Rated}
        </div>
        <div className="price">
          ${price}
          {Discount !== 0 ? <span>{Oprice}</span> : null}
        </div>
      </div>
      <div className="btns">
        <button>-</button>
        <span>0</span>
        <button>+ </button>
      </div>
    </Postitemstyle>
  );
};

export default ProductItem;
