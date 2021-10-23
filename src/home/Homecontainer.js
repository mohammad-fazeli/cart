import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../shared/redux/actions/productAction";
import ProductList from "./components/ProductList";

const HomeContainer = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
