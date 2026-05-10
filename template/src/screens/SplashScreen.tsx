import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ThemeColors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { useThemeColors } from "../theme/ThemeProvider";
import type { RootStackParamList } from "../navigation/types";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">;

export function SplashScreen({ navigation }: SplashScreenProps) {
  const colors = useThemeColors();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainTabs");
    }, 1600);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.logoMark}>
        <Text style={styles.logoText}>NB</Text>
      </View>
      <Text style={styles.title}>Native Boilerplate</Text>
      <Text style={styles.subtitle}>Starting your app...</Text>
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    screen: {
      alignItems: "center",
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: "center",
      padding: 24,
    },
    logoMark: {
      alignItems: "center",
      backgroundColor: colors.primary,
      borderRadius: 16,
      height: 72,
      justifyContent: "center",
      marginBottom: 24,
      width: 72,
    },
    logoText: {
      color: colors.surface,
      fontFamily: fonts.montserrat.extraBold,
      fontSize: 24,
    },
    title: {
      color: colors.text,
      fontFamily: fonts.montserrat.extraBold,
      fontSize: 28,
      marginBottom: 8,
    },
    subtitle: {
      color: colors.muted,
      fontFamily: fonts.montserrat.regular,
      fontSize: 16,
    },
  });
