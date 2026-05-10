import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenFrame } from '../components/ScreenFrame';
import { commonStyles } from '../theme/commonStyles';
import { colors } from '../theme/colors';

export function ProfileScreen() {
  return (
    <ScreenFrame eyebrow="Profile" title="Sample profile">
      <Text style={commonStyles.bodyText}>
        Add account details, user preferences, or profile completion steps here.
      </Text>
      <View style={styles.infoCard}>
        <Text style={styles.cardLabel}>Plan</Text>
        <Text style={styles.cardValue}>Starter</Text>
      </View>
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 24,
    padding: 16,
  },
  cardLabel: {
    color: colors.muted,
    fontSize: 13,
    marginBottom: 4,
  },
  cardValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
});
