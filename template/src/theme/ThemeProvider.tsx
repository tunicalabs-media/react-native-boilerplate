import React, { createContext, useContext, useMemo } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors, ThemeColors } from "./colors";
import { useAppSelector } from "../store/hooks";

type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  colors: ThemeColors;
  resolvedTheme: ResolvedTheme;
};

const ThemeContext = createContext<ThemeContextValue>({
  colors: lightColors,
  resolvedTheme: "light",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const themePreference = useAppSelector((state) => state.preferences.theme);

  const resolvedTheme: ResolvedTheme =
    themePreference === "system"
      ? systemColorScheme === "dark"
        ? "dark"
        : "light"
      : themePreference;

  const value = useMemo(
    () => ({
      colors: resolvedTheme === "dark" ? darkColors : lightColors,
      resolvedTheme,
    }),
    [resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeColors() {
  return useContext(ThemeContext).colors;
}

export function useResolvedTheme() {
  return useContext(ThemeContext).resolvedTheme;
}
