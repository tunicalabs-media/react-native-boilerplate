import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import type { Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import { DetailsScreen } from "../screens/DetailsScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { fonts } from "../theme/fonts";
import { useResolvedTheme, useThemeColors } from "../theme/ThemeProvider";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const colors = useThemeColors();
  const resolvedTheme = useResolvedTheme();

  const navigationTheme = React.useMemo<Theme>(
    () => ({
      dark: resolvedTheme === "dark",
      colors: {
        background: colors.background,
        border: colors.border,
        card: colors.surface,
        notification: colors.primary,
        primary: colors.primary,
        text: colors.text,
      },
      fonts: {
        bold: {
          fontFamily: fonts.montserrat.bold,
          fontWeight: "700",
        },
        heavy: {
          fontFamily: fonts.montserrat.extraBold,
          fontWeight: "800",
        },
        medium: {
          fontFamily: fonts.montserrat.medium,
          fontWeight: "500",
        },
        regular: {
          fontFamily: fonts.montserrat.regular,
          fontWeight: "400",
        },
      },
    }),
    [colors, resolvedTheme],
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontFamily: fonts.montserrat.bold,
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
