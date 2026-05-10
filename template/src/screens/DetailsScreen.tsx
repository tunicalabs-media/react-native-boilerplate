import React from "react";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenFrame } from "../components/ScreenFrame";
import { useCommonStyles } from "../theme/commonStyles";
import type { RootStackParamList } from "../navigation/types";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function DetailsScreen({ route }: DetailsScreenProps) {
  const commonStyles = useCommonStyles();

  return (
    <ScreenFrame eyebrow="Stack screen" title={route.params.title}>
      <Text style={commonStyles.bodyText}>
        This screen is outside the tab navigator, so it opens on top of the tabs
        using the root stack navigator.
      </Text>
    </ScreenFrame>
  );
}
