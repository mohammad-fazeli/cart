import styled from "styled-components";

export const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  .img-s {
    width: 500px;
  }
  .Information {
    padding-top: 5rem;
    color: #373f50;
    width: 500px;
    font-size: 1.3rem;
    .model {
      font-size: 2.5rem;
    }
    .brand {
      font-size: 1.3rem;
    }
    .reted {
      margin: 1rem 0;

      .star {
        color: #fac74b;
        margin-right: 5px;
      }
    }
    .availability {
      margin: 1rem 0;
    }
    .price {
      margin-bottom: 1rem;
      color: #d23f57;
      font-size: 1.6rem;
      span {
        margin-left: 5px;
        color: #c4c4c4;
        text-decoration: line-through;
      }
    }
  }
`;
