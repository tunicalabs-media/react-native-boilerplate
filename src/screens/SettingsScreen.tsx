import React, { useEffect } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import Toast from 'react-native-simple-toast';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { ScreenFrame } from '../components/ScreenFrame';
import { MoonIcon, SunIcon } from '../icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  loadPreferences,
  savePreferences,
  setNotificationsEnabled,
  setTheme,
} from '../store/slices/preferencesSlice';
import { commonStyles } from '../theme/commonStyles';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

type ThemePreference = 'system' | 'light' | 'dark';

const themeOptions: Array<{
  icon: 'system' | 'sun' | 'moon';
  label: string;
  value: ThemePreference;
}> = [
  { icon: 'system', label: 'System', value: 'system' },
  { icon: 'sun', label: 'Light', value: 'light' },
  { icon: 'moon', label: 'Dark', value: 'dark' },
];

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
    Toast.show(
      `Notifications ${nextNotificationsEnabled ? 'enabled' : 'disabled'}`,
      Toast.SHORT,
    );
  };

  const handleSelectTheme = (nextTheme: ThemePreference) => {
    if (theme === nextTheme) {
      return;
    }

    dispatch(setTheme(nextTheme));
    dispatch(
      savePreferences({
        notificationsEnabled,
        theme: nextTheme,
      }),
    );
    Toast.show(`Theme set to ${nextTheme}`, Toast.SHORT);
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
      <View style={styles.themeSwitcher}>
        {themeOptions.map(option => (
          <ThemeChoice
            key={option.value}
            icon={option.icon}
            label={option.label}
            selected={theme === option.value}
            tone={option.value}
            disabled={!isLoaded}
            onPress={() => handleSelectTheme(option.value)}
          />
        ))}
      </View>
      <View style={styles.actions}>
        <Button
          title="Toggle notifications"
          color={colors.primary}
          disabled={!isLoaded}
          onPress={handleToggleNotifications}
        />
      </View>
    </ScreenFrame>
  );
}

type ThemeChoiceProps = Omit<ThemeChoiceVariants, 'disabled' | 'selected'> & {
  disabled: boolean;
  icon: 'system' | 'sun' | 'moon';
  label: string;
  onPress: () => void;
  selected: boolean;
};

function ThemeChoice({
  disabled,
  icon,
  label,
  onPress,
  selected,
  tone,
}: ThemeChoiceProps) {
  themeChoiceStyles.useVariants({
    disabled,
    selected,
    tone,
  });

  const iconColor = selected ? colors.surface : colors.primary;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled, selected }}
      disabled={disabled}
      onPress={onPress}
      style={themeChoiceStyles.option}
    >
      <View style={themeChoiceStyles.icon}>
        {icon === 'sun' ? (
          <SunIcon color={iconColor} size={18} />
        ) : icon === 'moon' ? (
          <MoonIcon color={iconColor} size={18} />
        ) : (
          <View style={themeChoiceStyles.systemIcon}>
            <SunIcon color={iconColor} size={14} />
            <MoonIcon color={iconColor} size={12} />
          </View>
        )}
      </View>
      <Text style={themeChoiceStyles.optionLabel}>{label}</Text>
    </Pressable>
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
    fontFamily: fonts.montserrat.semiBold,
    fontSize: 16,
  },
  settingValue: {
    color: colors.muted,
    fontFamily: fonts.montserrat.regular,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  actions: {
    alignItems: 'flex-start',
    marginTop: 24,
  },
  themeSwitcher: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
});

const themeChoiceStyles = StyleSheet.create({
  option: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 8,
    minHeight: 82,
    paddingHorizontal: 10,
    paddingVertical: 12,
    variants: {
      disabled: {
        true: {
          opacity: 0.5,
        },
        false: {},
      },
      selected: {
        true: {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
        false: {},
      },
      tone: {
        system: {},
        light: {},
        dark: {
          backgroundColor: colors.text,
          borderColor: colors.text,
        },
      },
    },
  },
  icon: {
    alignItems: 'center',
    height: 22,
    justifyContent: 'center',
  },
  systemIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  optionLabel: {
    color: colors.text,
    fontFamily: fonts.montserrat.bold,
    fontSize: 13,
    variants: {
      disabled: {
        true: {},
        false: {},
      },
      selected: {
        true: {
          color: colors.surface,
        },
        false: {},
      },
      tone: {
        system: {},
        light: {},
        dark: {
          color: colors.surface,
        },
      },
    },
  },
});

type ThemeChoiceVariants = UnistylesVariants<typeof themeChoiceStyles>;
