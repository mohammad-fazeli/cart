import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addCart, removeCart } from "../shared/redux/actions/productAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

const Button = ({ cart, id, text = "", addCart, removeCart, availability }) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(0);
    // eslint-disable-next-line array-callback-return
    cart.map((product) => {
      if (product.id === id) {
        setcount(product.count);
      }
    });
  }, [cart, id]);

  return (
    <div className="Button">
      {count === 0 ? (
        text === "" ? (
          <button
            disabled={availability === "Not available"}
            className="btn-icon"
            onClick={() => addCart(id)}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        ) : (
          <button
            disabled={availability === "Not available"}
            className="btn-text"
            onClick={() => addCart(id)}
          >
            {text}
          </button>
        )
      ) : (
        <>
          {" "}
          <button className="btn-icon" onClick={() => removeCart(id)}>
            <FontAwesomeIcon icon={faMinusSquare} />
          </button>
          <span>{count}</span>
          <button
            disabled={availability === "Not available"}
            className="btn-icon"
            onClick={() => addCart(id)}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </>
      )}
    </div>
  );
};
const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = {
  addCart,
  removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
