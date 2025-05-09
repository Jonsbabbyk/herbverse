import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, SPACING } from '@/constants/theme';

interface CategoryButtonProps {
  title: string;
  id: string;
  active: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
}

export default function CategoryButton({
  title,
  id,
  active,
  onPress,
  icon,
}: CategoryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.activeContainer]}
      onPress={onPress}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginRight: SPACING.small,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeContainer: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  iconContainer: {
    marginRight: SPACING.tiny,
  },
  text: {
    ...FONTS.body3,
    color: COLORS.textPrimary,
  },
  activeText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});