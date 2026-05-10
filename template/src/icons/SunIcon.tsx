import React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  color?: string;
  size?: number;
};

export function SunIcon({ color = "#0F172A", size = 20, ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 17.25A5.25 5.25 0 1 0 12 6.75a5.25 5.25 0 0 0 0 10.5Z"
        stroke={color}
        strokeWidth={1.8}
      />
      <Path
        d="M12 2.75v2.1M12 19.15v2.1M21.25 12h-2.1M4.85 12h-2.1M18.54 5.46l-1.49 1.49M6.95 17.05l-1.49 1.49M18.54 18.54l-1.49-1.49M6.95 6.95 5.46 5.46"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.8}
      />
    </Svg>
  );
}
