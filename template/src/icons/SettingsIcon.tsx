import React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  color?: string;
  size?: number;
};

export function SettingsIcon({
  color = "#0F172A",
  size = 24,
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke={color}
        strokeWidth={1.8}
      />
      <Path
        d="M18.66 13.7c.07-.55.07-.85 0-1.4l2.02-1.58-2-3.46-2.52 1a7.02 7.02 0 0 0-1.22-.7l-.38-2.66h-4l-.38 2.66c-.43.18-.84.42-1.22.7l-2.52-1-2 3.46 2.02 1.58c-.07.55-.07.85 0 1.4l-2.02 1.58 2 3.46 2.52-1c.38.28.79.52 1.22.7l.38 2.66h4l.38-2.66c.43-.18.84-.42 1.22-.7l2.52 1 2-3.46-2.02-1.58Z"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={1.8}
      />
    </Svg>
  );
}
