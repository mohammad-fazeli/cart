import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Information = ({
  model = "",
  Brand,
  Rated,
  price,
  Discount,
  availability,
  id,
}) => {
  const [Oprice, setOprice] = useState();
  useEffect(() => {
    if (Discount !== 0) {
      const p = (price * Discount) / 100;
      setOprice((price + p).toString());
    }
  }, [Discount, price]);

  return (
    <div className="Information">
      <div className="model">{model}</div>
      <div className="brand">Brand: {Brand}</div>
      <div className="reted">
        <FontAwesomeIcon icon={faStar} className="star" />
        {Rated}
      </div>
      <div className="price">
        ${price}
        {Discount !== 0 ? <span>{Oprice}</span> : null}
      </div>
      <div className="availability">
        {availability === "Available" ? "Available" : ""}
      </div>
      <Button id={id} availability={availability} text="Add to Cart" />
    </div>
  );
};

export default Information;
