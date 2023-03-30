import styled from "styled-components";

export const Slider = styled.div`
  border: 1px solid rgba(44, 44, 44, 0.12);
  border-radius: 70px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .paginations {
    position: absolute;
    bottom: 90px;
    left: 90px;
    display: flex;
    gap: 10px;
    z-index: 2;

    .indicator {
      background: #2c2c2c;
      border-radius: 10px;
      width: 8px;
      height: 8px;
      transition: 500ms ease;
      opacity: 0.1;
      cursor: pointer;
      position: relative;

      &:hover {
        background: #3fc886;
        opacity: 0.8;
      }

      &.active {
        width: 18px;
        background: #3fc886;
        opacity: 1;
      }
    }
  }
`;
export const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 90px;

  .col {
    width: 460px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-weight: 700;
      font-size: 36px;
      line-height: 140%;
      color: #2c2c2c;
      span {
        color: #3fc886;
      }
    }
    .desc {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #2c2c2c;
    }
    .btn-inner {
      position: relative;
      z-index: 3;
      width: max-content;
    }
  }
  svg,
  img {
    max-width: 700px;
    height: 500px;
    object-fit: contain;
  }
  .ripple {
    position: absolute;
    z-index: 2;
    inset: 0;
  }
`;
