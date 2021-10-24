import React, { useEffect, useState } from "react";
import { ProductItemStayle } from "./styled.components";
import Button from "../../components/Button";

const ProductsItem = ({ id, model, price, image, cart, availability }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    cart.map((a) => {
      if (a.id === id) {
        setCount(a.count);
      }
    });
  }, [cart, id]);

  return (
    <ProductItemStayle>
      <div className="container">
        <img src={image} alt="" />
        <div>
          <div className="model">{model}</div>
          <div className="price">
            ${price} X{count} <span>{price * count}</span>
          </div>
        </div>
      </div>
      <Button id={id} availability={availability} />
    </ProductItemStayle>
  );
};

export default ProductsItem;
