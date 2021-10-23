import React from "react";
import ProductItem from "./ProductItem";
import { PostListStyle } from "./styled.components";
const ProductList = ({ products }) => {
  return (
    <PostListStyle>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          model={product.model}
          Rated={product.Rated}
          price={product.price}
          Discount={product.Discount}
          availability={product.availability}
          image={product.images[0]}
        />
      ))}
    </PostListStyle>
  );
};

export default ProductList;
