import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

type ScreenFrameProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function ScreenFrame({ eyebrow, title, children }: ScreenFrameProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  eyebrow: {
    color: colors.primary,
    fontFamily: fonts.montserrat.bold,
    fontSize: 13,
    letterSpacing: 0,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: fonts.montserrat.extraBold,
    fontSize: 30,
    marginBottom: 16,
  },
});
