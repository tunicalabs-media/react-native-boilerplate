import React from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useNavigation } from '@react-navigation/native';
import { ScreenFrame } from '../components/ScreenFrame';
import { commonStyles } from '../theme/commonStyles';
import { colors } from '../theme/colors';
import type { RootNavigation } from '../navigation/types';

export function HomeScreen() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <ScreenFrame eyebrow="Home" title="Welcome back">
      <Text style={commonStyles.bodyText}>
        This is the first tab. Use it as the landing screen after the splash
        screen finishes.
      </Text>
      <View style={styles.action}>
        <Button
          title="Open details"
          color={colors.primary}
          onPress={() => navigation.navigate('Details', { title: 'Details' })}
        />
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  action: {
    alignSelf: 'flex-start',
    marginTop: 24,
  },
});
