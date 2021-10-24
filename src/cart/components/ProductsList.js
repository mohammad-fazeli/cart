import React from "react";
import ProductsItem from "./ProductsItem";
const ProductsList = ({ cart, products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductsItem
          key={product.id}
          id={product.id}
          model={product.model}
          price={product.price}
          image={product.images[0].original}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default ProductsList;
