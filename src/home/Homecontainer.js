import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/homeAction";
import ProductList from "./components/ProductList";

const HomeContainer = ({ fetchProducts, products = [] }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

const mapStateToProps = ({ Home }) => {
  return { products: Home.products };
};

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
