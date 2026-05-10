import { StyleSheet } from 'react-native-unistyles';
import { colors } from './colors';
import { fonts } from './fonts';

export const commonStyles = StyleSheet.create({
  bodyText: {
    color: colors.textSecondary,
    fontFamily: fonts.montserrat.regular,
    fontSize: 16,
    lineHeight: 24,
  },
});
