import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Heart, Star } from 'lucide-react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '@/constants/theme';
import EcoBadge from './EcoBadge';

interface HerbProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  vendor: string;
  ecoRating: string[];
  featured?: boolean;
}

interface HerbCardProps {
  herb: HerbProps;
  featured?: boolean;
}

const { width } = Dimensions.get('window');

export default function HerbCard({ herb, featured = false }: HerbCardProps) {
  const cardWidth =
    (width - SPACING.medium * (featured ? 1 : 3)) / (featured ? 1.2 : 2);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        featured ? styles.featuredContainer : styles.regularContainer,
        { width: cardWidth },
      ]}
    >
      <Image source={{ uri: herb.image }} style={styles.image} />

      <TouchableOpacity style={styles.heartButton}>
        <Heart size={18} color={COLORS.white} fill="transparent" />
      </TouchableOpacity>

      <View style={styles.ecoBadges}>
        {herb.ecoRating.map((badge, index) => (
          <EcoBadge key={index} type={badge} small />
        ))}
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {herb.name}
        </Text>
        <Text style={styles.vendor} numberOfLines={1}>
          {herb.vendor}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>${herb.price.toFixed(2)}</Text>
          <View style={styles.rating}>
            <Star size={12} color={COLORS.warning} fill={COLORS.warning} />
            <Text style={styles.ratingText}>{herb.rating.toFixed(1)}</Text>
          </View>
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
    ...SHADOWS.small,
    marginBottom: SPACING.medium,
  },
  regularContainer: {
    marginRight: SPACING.medium,
  },
  featuredContainer: {
    marginRight: SPACING.medium,
  },
  image: {
    width: '100%',
    height: 140,
  },
  heartButton: {
    position: 'absolute',
    top: SPACING.small,
    right: SPACING.small,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ecoBadges: {
    position: 'absolute',
    top: SPACING.small,
    left: SPACING.small,
    flexDirection: 'row',
  },
  content: {
    padding: SPACING.small,
  },
  name: {
    ...FONTS.body2,
    color: COLORS.textPrimary,
  },
  vendor: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.small,
  },
  price: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginLeft: 2,
  },
});
