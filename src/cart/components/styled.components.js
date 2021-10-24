import styled from "styled-components";

export const ProductItemStayle = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: 50rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  .container {
    font-size: 1.3rem;
    color: #373f50;
    display: flex;
    height: 10rem;

    img {
      width: 10rem;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 0.5rem;
      .price {
        color: #c4c4c4;
        display: inline-block;
        span {
          color: #d23f57;
        }
      }
    }
  }
  .Button {
    padding-bottom: 1.5rem;
    padding-right: 1rem;
  }
`;

export const CartContainerStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;
  justify-content: center;
  align-items: flex-start;
`;

export const FormStyle = styled.div`
  width: 15rem;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #c4c4c4;
    .totoal {
      color: #c4c4c4;
    }
  }
  form {
    margin-top: 1rem;
    input,
    textarea {
      margin-bottom: 0.7rem;
      border: 1px solid #c4c4c4;
      outline: none;
      font-size: 1rem;
      padding: 5px 5px;
      width: 100%;
    }
    input::placeholder,
    textarea::placeholder {
      color: #c4c4c4;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    button {
      background: #d23f57;
      border-radius: 5px;
      width: 100%;
      color: #fff;
      border: none;
      outline: none;
      padding: 0.7rem 0;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;
