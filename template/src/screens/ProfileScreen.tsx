import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ScreenFrame } from "../components/ScreenFrame";
import { useCommonStyles } from "../theme/commonStyles";
import type { ThemeColors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { useThemeColors } from "../theme/ThemeProvider";

export function ProfileScreen() {
  const colors = useThemeColors();
  const commonStyles = useCommonStyles();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <ScreenFrame eyebrow="Profile" title="Sample profile">
      <Text style={commonStyles.bodyText}>
        Add account details, user preferences, or profile completion steps here.
      </Text>
      <View style={styles.infoCard}>
        <Text style={styles.cardLabel}>Plan</Text>
        <Text style={styles.cardValue}>Starter</Text>
      </View>
    </ScreenFrame>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    infoCard: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 24,
      padding: 16,
    },
    cardLabel: {
      color: colors.muted,
      fontFamily: fonts.montserrat.regular,
      fontSize: 13,
      marginBottom: 4,
    },
    cardValue: {
      color: colors.text,
      fontFamily: fonts.montserrat.bold,
      fontSize: 20,
    },
  });
