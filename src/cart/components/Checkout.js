import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { FormStyle } from "./styled.components";
import * as Yup from "yup";
import TextField from "./TextField";

const Checkout = ({ products, cart, clearCartProducts }) => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("firstName is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("lastName is required"),
    email: Yup.string().email("Email is invalid").required("email is required"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("confirm Password is required"),
    address: Yup.string()
      .max(150, "Must be 150 characters or less")
      .required("address is required"),
  });
  const [total, setTotal] = useState(0);

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
  const onSubmitHandle = (v) => {
    alert("finish");
    clearCartProducts();
  };
  return (
    <FormStyle>
      <div className="totalContainer">
        <span className="total">total:</span>
        <span>${total}</span>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
        }}
        onSubmit={onSubmitHandle}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <Form onSubmit={formik.handleSubmit}>
              <TextField
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <TextField name="lastName" type="text" placeholder="Last Name" />
              <TextField name="email" type="email" placeholder="Email" />
              <TextField
                name="password"
                type="password"
                placeholder="Password"
              />
              <TextField
                name="confirmPassword"
                type="password"
                placeholder="Confirm  Password"
              />
              <TextField name="address" type="textarea" placeholder="address" />
              <button type="submit">checkout now</button>
            </Form>
          </div>
        )}
      </Formik>
    </FormStyle>
  );
};

export default Checkout;
