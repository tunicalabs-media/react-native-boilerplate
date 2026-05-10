import React from 'react';
import { Button, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { StyleSheet } from 'react-native-unistyles';
import { useNavigation } from '@react-navigation/native';
import { ScreenFrame } from '../components/ScreenFrame';
import { useCommonStyles } from '../theme/commonStyles';
import type { ThemeColors } from '../theme/colors';
import { fonts } from '../theme/fonts';
import { useThemeColors } from '../theme/ThemeProvider';
import type { RootNavigation } from '../navigation/types';

export function HomeScreen() {
  const navigation = useNavigation<RootNavigation>();
  const colors = useThemeColors();
  const commonStyles = useCommonStyles();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <ScreenFrame eyebrow="Home" title="Welcome back">
      <Text style={commonStyles.bodyText}>
        This is the first tab. Use it as the landing screen after the splash
        screen finishes.
      </Text>
      <View style={styles.skeletonCard}>
        <Text style={styles.sectionTitle}>Skeleton placeholder</Text>
        <SkeletonPlaceholder
          backgroundColor={colors.border}
          borderRadius={8}
          highlightColor={colors.surface}
        >
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={56}
              height={56}
              borderRadius={28}
            />
            <SkeletonPlaceholder.Item marginLeft={16}>
              <SkeletonPlaceholder.Item width={180} height={16} />
              <SkeletonPlaceholder.Item
                marginTop={10}
                width={120}
                height={14}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
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

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    action: {
      alignSelf: 'flex-start',
      marginTop: 24,
    },
    sectionTitle: {
      color: colors.text,
      fontFamily: fonts.montserrat.bold,
      fontSize: 15,
      marginBottom: 16,
    },
    skeletonCard: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 24,
      padding: 16,
    },
  });
