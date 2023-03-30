import styled from "styled-components";

export const Header = styled.header`
  padding: 30px 21px;
  border-bottom: 1px solid rgba(44, 44, 44, 0.12);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  span {
    font-family: "Russo One", sans-serif;
    font-size: 28px;
    font-weight: 400;
    color: #2c2c2c;
  }
`;

export const Navlinks = styled.nav`
  display: flex;
  margin-left: 50px;
  align-items: center;
  a {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    font-feature-settings: "liga" off;
    color: #2c2c2c;
    padding: 8px 20px;
    transition: 300ms ease;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      transition: 300ms ease;
    }
    &:hover {
      &::after {
        width: 100%;
        height: 100%;
        background: rgba(63, 200, 134, 0.1);
      }
    }
    &.active {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #3fc886;

      &::after {
        width: 100%;
        height: 100%;
        background: rgba(63, 200, 134, 0.2);
      }
    }
  }
`;
export const Contact = styled.a`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #2c2c2c;
  padding: 8px 20px;
  transition: 300ms ease;
  border-radius: 8px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    transition: 300ms ease;
  }
  &:hover {
    &::after {
      width: 100%;
      height: 100%;
      background: rgba(63, 200, 134, 0.2);
    }
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: right;
    font-feature-settings: "liga" off;
    color: #3fc886;
  }
`;
