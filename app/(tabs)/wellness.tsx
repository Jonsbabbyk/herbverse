import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { wellnessPlans } from '@/data/wellnessPlans';
import WellnessPlanCard from '@/components/WellnessPlanCard';

export default function WellnessScreen() {
  const recommendedPlans = wellnessPlans.filter(plan => plan.recommended);
  const otherPlans = wellnessPlans.filter(plan => !plan.recommended);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Wellness Plans</Text>
          <Text style={styles.subtitle}>
            Custom herb bundles for specific wellness goals
          </Text>
        </View>
        
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6157236/pexels-photo-6157236.jpeg' }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Personalized Wellness</Text>
            <Text style={styles.bannerText}>
              Get customized herbal plans tailored to your specific needs
            </Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Take Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommended for You</Text>
          {recommendedPlans.map(plan => (
            <WellnessPlanCard key={plan.id} plan={plan} />
          ))}
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Plans</Text>
          {otherPlans.map(plan => (
            <WellnessPlanCard key={plan.id} plan={plan} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.medium * 5,
    paddingBottom: SPACING.medium,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.textPrimary,
  },
  subtitle: {
    ...FONTS.body2,
    color: COLORS.textSecondary,
    marginTop: SPACING.small,
  },
  bannerContainer: {
    marginTop: SPACING.medium,
    marginHorizontal: SPACING.medium,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: SPACING.medium,
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: SPACING.small,
  },
  bannerText: {
    ...FONTS.body3,
    color: COLORS.white,
    marginBottom: SPACING.medium,
  },
  bannerButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  sectionContainer: {
    marginTop: SPACING.large,
    marginBottom: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.medium,
  },
});