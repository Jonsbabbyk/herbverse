import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Star, Video } from 'lucide-react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '@/constants/theme';

interface HerbalistProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  price: number;
  availability: string[];
}

interface HerbalistCardProps {
  herbalist: HerbalistProps;
}

export default function HerbalistCard({ herbalist }: HerbalistCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: herbalist.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.name}>{herbalist.name}</Text>
        <Text style={styles.specialty}>{herbalist.specialty}</Text>
        
        <View style={styles.ratingContainer}>
          <Star size={14} color={COLORS.warning} fill={COLORS.warning} />
          <Text style={styles.rating}>{herbalist.rating.toFixed(1)}</Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.price}>${herbalist.price}/session</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Video size={14} color={COLORS.white} />
            <Text style={styles.bookButtonText}>Book</Text>
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
    width: 160,
    overflow: 'hidden',
    marginRight: SPACING.medium,
    ...SHADOWS.small,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: SPACING.small,
  },
  name: {
    ...FONTS.body2,
    color: COLORS.textPrimary,
  },
  specialty: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.small,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.caption,
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
    ...FONTS.body3,
    color: COLORS.primary,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  bookButtonText: {
    ...FONTS.caption,
    color: COLORS.white,
    fontWeight: '600',
    marginLeft: 4,
  },
});