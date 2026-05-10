import { StyleSheet } from 'react-native-unistyles';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

export const tabBarStyles = StyleSheet.create({
  container: {
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
