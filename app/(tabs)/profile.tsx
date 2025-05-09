import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { User, Heart, CreditCard, Map, Bell, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  
  const MenuSection = ({ title, children }) => (
    <View style={styles.menuSection}>
      <Text style={styles.menuSectionTitle}>{title}</Text>
      <View style={styles.menuItems}>{children}</View>
    </View>
  );
  
  const MenuItem = ({ icon, title, subtitle, onPress, rightElement }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuIconContainer}>{icon}</View>
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuItemSubtitle}>{subtitle}</Text>}
      </View>
      {rightElement || (
        <ChevronRight size={20} color={COLORS.textSecondary} />
      )}
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Emma Robertson</Text>
            <Text style={styles.profileEmail}>emma.r@example.com</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <MenuSection title="Account">
          <MenuItem
            icon={<Heart size={20} color={COLORS.accent} />}
            title="Saved Items"
            subtitle="View your wishlist"
            onPress={() => {}}
          />
          <MenuItem
            icon={<CreditCard size={20} color={COLORS.accent} />}
            title="Payment Methods"
            subtitle="Manage your cards"
            onPress={() => {}}
          />
          <MenuItem
            icon={<Map size={20} color={COLORS.accent} />}
            title="Addresses"
            subtitle="Manage delivery addresses"
            onPress={() => {}}
          />
        </MenuSection>
        
        <MenuSection title="Preferences">
          <MenuItem
            icon={<Bell size={20} color={COLORS.accent} />}
            title="Notifications"
            subtitle="Manage alerts and reminders"
            onPress={() => {}}
            rightElement={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#d1d1d1', true: COLORS.primaryLight }}
                thumbColor={notificationsEnabled ? COLORS.primary : '#f4f3f4'}
              />
            }
          />
        </MenuSection>
        
        <MenuSection title="Support">
          <MenuItem
            icon={<HelpCircle size={20} color={COLORS.accent} />}
            title="Help Center"
            subtitle="FAQ and support resources"
            onPress={() => {}}
          />
        </MenuSection>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={COLORS.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.medium,
    marginBottom: SPACING.medium,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: SPACING.medium,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
  },
  profileEmail: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginBottom: SPACING.small,
  },
  editButton: {
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: SPACING.tiny,
    paddingHorizontal: SPACING.small,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    ...FONTS.button,
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  menuSection: {
    marginBottom: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  menuSectionTitle: {
    ...FONTS.h3,
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
  },
  menuItems: {
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.small,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    ...FONTS.body2,
    color: COLORS.textPrimary,
  },
  menuItemSubtitle: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.medium,
    marginBottom: SPACING.large * 2,
    marginHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logoutText: {
    ...FONTS.button,
    color: COLORS.error,
    marginLeft: SPACING.small,
  },
});