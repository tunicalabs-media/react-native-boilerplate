import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/RootNavigator';
import { useAppDispatch } from './store/hooks';
import { loadPreferences } from './store/slices/preferencesSlice';
import { store } from './store/store';
import {
  ThemeProvider,
  useResolvedTheme,
  useThemeColors,
} from './theme/ThemeProvider';

function AppShell() {
  const colors = useThemeColors();
  const resolvedTheme = useResolvedTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPreferences());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
