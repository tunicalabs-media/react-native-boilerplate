import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ScreenFrame } from '../components/ScreenFrame';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  loadPreferences,
  savePreferences,
  setNotificationsEnabled,
  setTheme,
} from '../store/slices/preferencesSlice';
import { commonStyles } from '../theme/commonStyles';
import { colors } from '../theme/colors';

export function SettingsScreen() {
  const dispatch = useAppDispatch();
  const { isLoaded, notificationsEnabled, theme } = useAppSelector(
    state => state.preferences,
  );

  useEffect(() => {
    dispatch(loadPreferences());
  }, [dispatch]);

  const handleToggleNotifications = () => {
    const nextNotificationsEnabled = !notificationsEnabled;

    dispatch(setNotificationsEnabled(nextNotificationsEnabled));
    dispatch(
      savePreferences({
        notificationsEnabled: nextNotificationsEnabled,
        theme,
      }),
    );
  };

  const handleCycleTheme = () => {
    const nextTheme =
      theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';

    dispatch(setTheme(nextTheme));
    dispatch(
      savePreferences({
        notificationsEnabled,
        theme: nextTheme,
      }),
    );
  };

  return (
    <ScreenFrame eyebrow="Settings" title="App settings">
      <Text style={commonStyles.bodyText}>
        This screen shows Redux Toolkit state with AsyncStorage persistence.
      </Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Push notifications</Text>
        <Text style={styles.settingValue}>
          {notificationsEnabled ? 'Enabled' : 'Disabled'}
        </Text>
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Theme</Text>
        <Text style={styles.settingValue}>{theme}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          title="Toggle notifications"
          color={colors.primary}
          disabled={!isLoaded}
          onPress={handleToggleNotifications}
        />
        <View style={styles.actionSpacer} />
        <Button
          title="Cycle theme"
          color={colors.primary}
          disabled={!isLoaded}
          onPress={handleCycleTheme}
        />
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
    textTransform: 'capitalize',
  },
  actions: {
    alignItems: 'flex-start',
    marginTop: 24,
  },
  actionSpacer: {
    height: 12,
  },
});
