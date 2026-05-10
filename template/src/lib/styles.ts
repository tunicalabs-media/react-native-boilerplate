import React from "react";
import { StyleSheet } from "react-native-unistyles";
import type { ThemeColors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { useThemeColors } from "../theme/ThemeProvider";

export function useTabBarStyles() {
  const colors = useThemeColors();

  return React.useMemo(() => createTabBarStyles(colors), [colors]);
}

const createTabBarStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderTopColor: colors.border,
      height: 64,
      paddingBottom: 8,
      paddingTop: 8,
    },
    label: {
      fontFamily: fonts.montserrat.bold,
      fontSize: 12,
    },
  });
