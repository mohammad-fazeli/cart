import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 4rem;
  background: #fff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  align-items: center;
  @media screen and (max-width: 850px) {
    padding: 0 1rem;
  }
  .logo {
    background: #f3f5f9;
    width: 7rem;
    padding: 0.2rem 0;
    text-align: center;
    font-size: 2rem;
    border-radius: 5px;
  }
  .cart-icon {
    cursor: pointer;
    background: #f3f5f9;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    span {
      position: absolute;
      bottom: 0;
      right: 0;
      background: #d23f57;
      color: #fff;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      text-align: center;
      padding-top: 1px;
      font-size: 1rem;
    }
  }
`;
