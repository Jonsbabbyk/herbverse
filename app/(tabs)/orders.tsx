import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { orders } from '@/data/orders';
import { Package, Clock, Check } from 'lucide-react-native';
import OrderCard from '@/components/OrderCard';

export default function OrdersScreen() {
  const [activeTab, setActiveTab] = useState('active');
  
  const activeOrders = orders.filter(order => order.status !== 'delivered');
  const pastOrders = orders.filter(order => order.status === 'delivered');
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>My Orders</Text>
        </View>
        
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'active' && styles.activeTab]}
            onPress={() => setActiveTab('active')}>
            <Text 
              style={[
                styles.tabText, 
                activeTab === 'active' && styles.activeTabText
              ]}>
              Active
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
        
        {activeTab === 'active' && (
          <View style={styles.ordersContainer}>
            {activeOrders.length > 0 ? (
              activeOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No active orders</Text>
                <TouchableOpacity style={styles.shopButton}>
                  <Text style={styles.shopButtonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        
        {activeTab === 'past' && (
          <View style={styles.ordersContainer}>
            {pastOrders.length > 0 ? (
              pastOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No past orders</Text>
              </View>
            )}
          </View>
        )}
        
        <View style={styles.subscriptionContainer}>
          <Text style={styles.sectionTitle}>Subscriptions</Text>
          <View style={styles.subscriptionCard}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/4412559/pexels-photo-4412559.jpeg',
              }}
              style={styles.subscriptionImage}
            />
            <View style={styles.subscriptionContent}>
              <Text style={styles.subscriptionTitle}>Monthly Wellness Box</Text>
              <Text style={styles.subscriptionDescription}>
                Curated selection of seasonal herbs
              </Text>
              <View style={styles.subscriptionDetails}>
                <Text style={styles.subscriptionPrice}>$29.99/mo</Text>
                <Text style={styles.subscriptionNext}>Next: Nov 15, 2025</Text>
              </View>
              <TouchableOpacity style={styles.subscriptionButton}>
                <Text style={styles.subscriptionButtonText}>Manage</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  ordersContainer: {
    paddingHorizontal: SPACING.medium,
    marginBottom: SPACING.large,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: SPACING.large,
  },
  emptyStateText: {
    ...FONTS.body2,
    color: COLORS.textSecondary,
    marginBottom: SPACING.medium,
  },
  shopButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
  },
  shopButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  subscriptionContainer: {
    marginTop: SPACING.medium,
    marginBottom: SPACING.large,
    paddingHorizontal: SPACING.medium,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.medium,
  },
  subscriptionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  subscriptionImage: {
    width: '100%',
    height: 120,
  },
  subscriptionContent: {
    padding: SPACING.medium,
  },
  subscriptionTitle: {
    ...FONTS.h3,
    color: COLORS.textPrimary,
  },
  subscriptionDescription: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginTop: SPACING.tiny,
  },
  subscriptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.small,
    marginBottom: SPACING.small,
  },
  subscriptionPrice: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  subscriptionNext: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  subscriptionButton: {
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    paddingVertical: SPACING.small,
    borderRadius: 8,
    marginTop: SPACING.tiny,
  },
  subscriptionButtonText: {
    ...FONTS.button,
    color: COLORS.textPrimary,
  },
});