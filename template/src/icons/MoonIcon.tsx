import React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  color?: string;
  size?: number;
};

export function MoonIcon({
  color = "#0F172A",
  size = 20,
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20.25 15.2A8.68 8.68 0 0 1 8.8 3.75a8.7 8.7 0 1 0 11.45 11.45Z"
        fill={color}
      />
    </Svg>
  );
}
