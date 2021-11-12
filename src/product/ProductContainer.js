import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "./actions/productAction";
import ImageGallery from "react-image-gallery";
import { ProductStyles } from "./components/styled.components";
import Information from "./components/Information";

const ProductContainer = ({ match, fetchProduct, product }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProduct(match.params.id);
  }, [fetchProduct, match.params.id]);
  useEffect(() => {
    if (product.images) {
      setItems(product.images);
    }
  }, [product]);
  return (
    <ProductStyles>
      <div className="img-s">
        <ImageGallery
          items={items}
          useBrowserFullscreen={false}
          showPlayButton={false}
          showNav={false}
        />
      </div>
      <Information
        model={product.model}
        Brand={product.Brand}
        Rated={product.Rated}
        price={product.price}
        Discount={product.Discount}
        availability={product.availability}
        id={product.id}
      />
    </ProductStyles>
  );
};
const mapStateToProps = ({ Product }) => {
  return { product: Product.product };
};

const mapDispatchToProps = {
  fetchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
