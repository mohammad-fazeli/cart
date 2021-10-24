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
  @media screen and (max-width: 1200px) {
    width: 35rem;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
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
  @media screen and (max-width: 850px) {
    grid-template-columns: auto;
    grid-row-gap: 2rem;
  }
  .empty-Cart {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      margin-top: 2rem;
      background: #d23f57;
      color: #fff;
      padding: 1rem 1rem;
      border-radius: 12px;
    }
  }
`;

export const FormStyle = styled.div`
  width: 15rem;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  @media screen and (max-width: 850px) {
    width: 100%;
  }
  .totalContainer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #c4c4c4;
    .total {
      color: #c4c4c4;
    }
  }
  div {
    input,
    textarea {
      width: 100%;
      border: 1px solid #c4c4c4;
      font-size: 1rem;
      padding: 0.2rem 0.4rem;
      margin-top: 1.3rem;
      border-radius: 4px;
    }
    textarea {
      height: 7rem;
    }
  }
  button {
    background: #d23f57;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
    width: 100%;
    padding: 0.4rem 0;
    margin-top: 1.3rem;
  }
  .error {
    color: #d23f57;
    position: absolute;
    font-size: 1rem;
  }
`;
