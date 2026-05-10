import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: undefined;
  Details: { title: string };
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
