import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 35px;
  gap: 10px;
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  border: 0;
  font-weight: 500;
  transition: 300ms ease;
  background: transparent;
  overflow: hidden;
  position: relative;

  &.primary {
    background: #3fc886;
    box-shadow: 0px 4px 20px rgba(63, 200, 134, 0.2);
    color: #ffffff;
  }
  &.outlined-primary {
    background: rgba(63, 200, 134, 0.2);
    color: #3fc886;
    &:hover {
      background: #3fc886;
      box-shadow: 0px 4px 20px rgba(63, 200, 134, 0.2);
      color: #ffffff;
    }
  }
  &.outlined {
    border: 1px solid rgba(44, 44, 44, 0.12);
    color: #2c2c2c;
    &:hover {
      color: #3fc886;
      border-color: #3fc886;
    }
  }
`;
