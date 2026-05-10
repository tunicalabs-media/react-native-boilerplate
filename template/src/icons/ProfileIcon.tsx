import React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  color?: string;
  size?: number;
};

export function ProfileIcon({
  color = "#0F172A",
  size = 24,
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 12.25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke={color}
        strokeWidth={1.8}
      />
      <Path
        d="M4.75 20.25c.77-3.35 3.55-5.25 7.25-5.25s6.48 1.9 7.25 5.25"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.8}
      />
    </Svg>
  );
}
