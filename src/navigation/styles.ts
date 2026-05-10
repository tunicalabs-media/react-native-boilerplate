import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const tabBarStyles = StyleSheet.create({
  container: {
    borderTopColor: colors.border,
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
  },
});
