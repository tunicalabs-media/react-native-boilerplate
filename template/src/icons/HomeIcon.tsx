import React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  color?: string;
  size?: number;
};

export function HomeIcon({
  color = "#0F172A",
  size = 24,
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3.75 10.67 12 3.75l8.25 6.92v8.08a1.5 1.5 0 0 1-1.5 1.5h-4.5v-5.5h-4.5v5.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-8.08Z"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={1.8}
      />
    </Svg>
  );
}
