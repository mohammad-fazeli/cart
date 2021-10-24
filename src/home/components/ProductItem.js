import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Postitemstyle } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
const ProductItem = ({
  model,
  Rated,
  price,
  Discount,
  availability,
  image,
  id,
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
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="text">
        <Link to={`/product/${id}`}>
          <div className="model">{model}</div>
        </Link>

        <div className="reted">
          <FontAwesomeIcon icon={faStar} className="star" />
          {Rated}
        </div>
        <div className="price">
          ${price}
          {Discount !== 0 ? <span>{Oprice}</span> : null}
        </div>
      </div>
      <Button id={id} availability={availability} className="btn" />
    </Postitemstyle>
  );
};

export default ProductItem;
