import React from "react";
import { StyleSheet } from "react-native-unistyles";
import type { ThemeColors } from "./colors";
import { fonts } from "./fonts";
import { useThemeColors } from "./ThemeProvider";

export function useCommonStyles() {
  const colors = useThemeColors();

  return React.useMemo(() => createCommonStyles(colors), [colors]);
}

const createCommonStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    bodyText: {
      color: colors.textSecondary,
      fontFamily: fonts.montserrat.regular,
      fontSize: 16,
      lineHeight: 24,
    },
  });
