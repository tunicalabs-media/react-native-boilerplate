import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ProfileIcon, SettingsIcon } from '../icons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useTabBarStyles } from '../lib/styles';
import { useThemeColors } from '../theme/ThemeProvider';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  const colors = useThemeColors();
  const tabBarStyles = useTabBarStyles();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'Profile') {
            return <ProfileIcon color={color} size={size} />;
          }

          return <SettingsIcon color={color} size={size} />;
        },
        tabBarStyle: tabBarStyles.container,
        tabBarLabelStyle: tabBarStyles.label,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
