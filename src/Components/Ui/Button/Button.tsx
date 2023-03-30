import { FC, ReactNode } from "react";
import Ripple from "../Ripple/Ripple";
import * as s from "./style";

type variant = "default" | "primary" | "outlined-primary" | "outlined";

type Props = {
  variant?: variant;
  style?: object | undefined;
  children?: ReactNode | undefined;
  rippleColor?: string;
  rippleDuration?: number;
  onClick?: Function;
};

export const Button: FC<Props> = ({
  variant,
  style,
  rippleColor = "#fff",
  onClick,
  rippleDuration = 850,
  children,
}) => {
  return (
    <s.Button
      className={variant}
      onClick={(e) => onClick && onClick(e)}
      style={style}
    >
      {children}
      <Ripple color={rippleColor} duration={rippleDuration} />
    </s.Button>
  );
};

Button.defaultProps = {
  variant: "primary",
  rippleColor: "#fff",
  rippleDuration: 850,
  style: {},
  onClick: () => {},
};
