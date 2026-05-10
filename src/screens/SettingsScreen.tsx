import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenFrame } from '../components/ScreenFrame';
import { commonStyles } from '../theme/commonStyles';
import { colors } from '../theme/colors';

export function SettingsScreen() {
  return (
    <ScreenFrame eyebrow="Settings" title="App settings">
      <Text style={commonStyles.bodyText}>
        This tab can hold notification preferences, theme settings, or support
        links.
      </Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Push notifications</Text>
        <Text style={styles.settingValue}>Enabled</Text>
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Theme</Text>
        <Text style={styles.settingValue}>System</Text>
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  settingRow: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    padding: 16,
  },
  settingLabel: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  settingValue: {
    color: colors.muted,
    fontSize: 15,
  },
});
