import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { Leaf, Recycle, MapPin } from 'lucide-react-native';

interface EcoBadgeProps {
  type: string;
  small?: boolean;
}

export default function EcoBadge({ type, small = false }: EcoBadgeProps) {
  const getBadgeColor = () => {
    switch (type.toLowerCase()) {
      case 'organic':
        return COLORS.ecoBadge1;
      case 'sustainable':
        return COLORS.ecoBadge2;
      case 'local':
        return COLORS.ecoBadge3;
      default:
        return COLORS.primary;
    }
  };
  
  const getBadgeIcon = () => {
    const size = small ? 10 : 14;
    const color = COLORS.white;
    
    switch (type.toLowerCase()) {
      case 'organic':
        return <Leaf size={size} color={color} />;
      case 'sustainable':
        return <Recycle size={size} color={color} />;
      case 'local':
        return <MapPin size={size} color={color} />;
      default:
        return <Leaf size={size} color={color} />;
    }
  };
  
  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: getBadgeColor() },
        small ? styles.smallBadge : styles.regularBadge
      ]}>
      {getBadgeIcon()}
      {!small && (
        <Text style={styles.text}>{type}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: SPACING.tiny,
    marginBottom: SPACING.tiny,
  },
  regularBadge: {
    paddingHorizontal: SPACING.small,
    paddingVertical: SPACING.tiny,
  },
  smallBadge: {
    paddingHorizontal: SPACING.tiny,
    paddingVertical: SPACING.tiny,
  },
  text: {
    ...FONTS.caption,
    color: COLORS.white,
    marginLeft: 4,
    fontWeight: '600',
  },
});