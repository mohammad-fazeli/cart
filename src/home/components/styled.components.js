import styled from "styled-components";

export const Postitemstyle = styled.div`
  position: relative;
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 0 10px;
  .discount {
    position: absolute;
    left: 10px;
    top: 5px;
    background-color: #d23f57;
    color: #fff;
    text-align: center;
    width: 3rem;
    padding: 0.1rem 0;
    border-radius: 5px;
  }
  .Button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 240px;
    height: 240px;
    /* border: 1px solid black; */
  }
  .text {
    padding-bottom: 0.5rem;
    .model {
      font-size: 1.1rem;
    }
    .reted {
      font-size: 1rem;
      margin: 1rem 0;
      .star {
        color: #fac74b;
        margin-right: 5px;
      }
    }
    .price {
      color: #d23f57;
      line-height: 21px;
      font-size: 1.2rem;
      span {
        margin-left: 5px;
        color: #c4c4c4;
        text-decoration: line-through;
      }
    }
  }
`;

export const PostListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
  }
`;
