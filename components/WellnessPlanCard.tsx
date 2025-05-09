import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Clock, ShoppingBag } from 'lucide-react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '@/constants/theme';

interface WellnessPlanProps {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  herbs: string[];
  recommended?: boolean;
}

interface WellnessPlanCardProps {
  plan: WellnessPlanProps;
}

export default function WellnessPlanCard({ plan }: WellnessPlanCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: plan.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{plan.name}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {plan.description}
            </Text>
          </View>
          {plan.recommended && (
            <View style={styles.recommendedBadge}>
              <Text style={styles.recommendedText}>Recommended</Text>
            </View>
          )}
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Clock size={14} color={COLORS.textSecondary} />
            <Text style={styles.detailText}>{plan.duration}</Text>
          </View>
          <View style={styles.detailItem}>
            <ShoppingBag size={14} color={COLORS.textSecondary} />
            <Text style={styles.detailText}>
              {plan.herbs.length} herbs included
            </Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.price}>${plan.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: SPACING.medium,
    ...SHADOWS.small,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: SPACING.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
  },
  description: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginTop: 4,
    lineHeight: 20,
  },
  recommendedBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.small,
    paddingVertical: SPACING.tiny,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  recommendedText: {
    ...FONTS.caption,
    color: COLORS.white,
    fontWeight: '600',
  },
  details: {
    flexDirection: 'row',
    marginTop: SPACING.medium,
    marginBottom: SPACING.small,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACING.medium,
  },
  detailText: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.small,
  },
  price: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
  },
  buttonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
});