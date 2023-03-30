import React, { useState, useLayoutEffect, FC } from "react";
import { RippleContainer } from "./Ripple.styled";

type Props = {
  duration: number;
  color: string;
  size?: null | number;
  position?: undefined | "fixed" | "absolute" | "relative";
};

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function
) => {
  useLayoutEffect(() => {
    let bounce: string | number | NodeJS.Timeout | null | undefined = null;
    if (rippleCount > 0) {
      clearTimeout(bounce as unknown as number);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce as NodeJS.Timeout);
      }, duration * 4);
    }

    return () => clearTimeout(bounce as NodeJS.Timeout);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple: FC<Props> = ({
  duration,
  color,
  size = null,
  position = "absolute",
}) => {
  const [rippleArray, setRippleArray] = useState<any>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const sizeXY = size
      ? size
      : rippleContainer.width > rippleContainer.height
      ? rippleContainer.width
      : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - sizeXY / 2;
    const y = event.pageY - rippleContainer.y - sizeXY / 2;
    const newRipple = {
      x,
      y,
      sizeXY,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer
      duration={duration}
      color={color}
      onClick={addRipple}
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.sizeXY,
                height: ripple.sizeXY,
                position,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

Ripple.defaultProps = {
  duration: 850,
  color: "#fff",
};

export default Ripple;
