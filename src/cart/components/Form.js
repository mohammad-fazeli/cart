import React, { useEffect, useState } from "react";
import { FormStyle } from "./styled.components";
const Form = ({ products, cart }) => {
  const [totoal, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0);
    // eslint-disable-next-line array-callback-return
    products.map((product) => {
      // eslint-disable-next-line array-callback-return
      cart.map((a) => {
        if (a.id === product.id) {
          setTotal((total) => total + product.price * a.count);
        }
      });
    });
  }, [cart, products]);

  return (
    <FormStyle>
      <div>
        <span className="totoal">totoal:</span>
        <span>${totoal}</span>
      </div>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm  Password" />
        <textarea rows="10" placeholder="address"></textarea>
        <button>checkout now</button>
      </form>
    </FormStyle>
  );
};

export default Form;
