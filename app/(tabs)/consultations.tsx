import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { herbalists } from '@/data/herbalists';
import { Calendar, Clock, Video } from 'lucide-react-native';
import HerbalistCard from '@/components/HerbalistCard';

export default function ConsultationsScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingConsultations = [
    {
      id: '1',
      date: 'Oct 25, 2025',
      time: '2:00 PM',
      herbalist: herbalists[0],
      type: 'video',
    },
  ];
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Consultations</Text>
          <Text style={styles.subtitle}>
            Book sessions with herbal experts
          </Text>
        </View>
        
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
            onPress={() => setActiveTab('upcoming')}>
            <Text 
              style={[
                styles.tabText, 
                activeTab === 'upcoming' && styles.activeTabText
              ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'past' && styles.activeTab]}
            onPress={() => setActiveTab('past')}>
            <Text 
              style={[
                styles.tabText, 
                activeTab === 'past' && styles.activeTabText
              ]}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
        
        {activeTab === 'upcoming' && (
          <>
            {upcomingConsultations.length > 0 ? (
              <View style={styles.consultationsContainer}>
                {upcomingConsultations.map(consultation => (
                  <View key={consultation.id} style={styles.consultationCard}>
                    <View style={styles.consultationHeader}>
                      <Image 
                        source={{ uri: consultation.herbalist.image }}
                        style={styles.herbalistImage}
                      />
                      <View style={styles.consultationInfo}>
                        <Text style={styles.herbalistName}>
                          {consultation.herbalist.name}
                        </Text>
                        <Text style={styles.herbalistSpecialty}>
                          {consultation.herbalist.specialty}
                        </Text>
                      </View>
                    </View>
                    
                    <View style={styles.consultationDetails}>
                      <View style={styles.detailItem}>
                        <Calendar size={16} color={COLORS.textSecondary} />
                        <Text style={styles.detailText}>{consultation.date}</Text>
                      </View>
                      <View style={styles.detailItem}>
                        <Clock size={16} color={COLORS.textSecondary} />
                        <Text style={styles.detailText}>{consultation.time}</Text>
                      </View>
                      <View style={styles.detailItem}>
                        <Video size={16} color={COLORS.textSecondary} />
                        <Text style={styles.detailText}>Video Call</Text>
                      </View>
                    </View>
                    
                    <View style={styles.actions}>
                      <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Reschedule</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Join Call</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No upcoming consultations</Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book a Consultation</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        
        {activeTab === 'past' && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No past consultations</Text>
          </View>
        )}
        
        <View style={styles.expertSection}>
          <Text style={styles.sectionTitle}>Our Herbal Experts</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.expertsContainer}>
            {herbalists.map(herbalist => (
              <HerbalistCard key={herbalist.id} herbalist={herbalist} />
            ))}
          </ScrollView>
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
  tabs: {
    flexDirection: 'row',
    marginHorizontal: SPACING.medium,
    marginBottom: SPACING.medium,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.small,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.body3,
    color: COLORS.textPrimary,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  consultationsContainer: {
    paddingHorizontal: SPACING.medium,
  },
  consultationCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  consultationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
  herbalistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.small,
  },
  consultationInfo: {
    flex: 1,
  },
  herbalistName: {
    ...FONTS.h3,
    color: COLORS.textPrimary,
  },
  herbalistSpecialty: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  consultationDetails: {
    backgroundColor: COLORS.backgroundLight,
    padding: SPACING.small,
    borderRadius: 8,
    marginBottom: SPACING.medium,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.tiny,
  },
  detailText: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginLeft: SPACING.tiny,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
    flex: 1,
    marginLeft: SPACING.small,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  secondaryButton: {
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  secondaryButtonText: {
    ...FONTS.button,
    color: COLORS.textPrimary,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: SPACING.large,
    paddingHorizontal: SPACING.medium,
  },
  emptyStateText: {
    ...FONTS.body2,
    color: COLORS.textSecondary,
    marginBottom: SPACING.medium,
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
  },
  bookButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  expertSection: {
    marginTop: SPACING.large,
    marginBottom: SPACING.large,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  expertsContainer: {
    paddingLeft: SPACING.medium,
    paddingRight: SPACING.small,
    paddingBottom: SPACING.small,
  },
});