import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Search, Filter } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { herbData } from '@/data/herbs';
import { categoryData } from '@/data/categories';
import HerbCard from '@/components/HerbCard';
import CategoryButton from '@/components/CategoryButton';
import SearchBar from '@/components/SearchBar';

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredHerbs = herbData.filter(herb => herb.featured);
  const popularHerbs = herbData.sort((a, b) => b.rating - a.rating).slice(0, 6);

  const filteredHerbs = searchQuery
    ? herbData.filter(
        herb =>
          herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          herb.benefits.some(benefit =>
            benefit.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.title}>Find your perfect herb</Text>
        </View>

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search by herb name or symptom..."
        />

        {searchQuery ? (
          <View style={styles.searchResults}>
            <Text style={styles.sectionTitle}>
              Search Results ({filteredHerbs.length})
            </Text>
            {filteredHerbs.length > 0 ? (
              <FlatList
                data={filteredHerbs}
                renderItem={({ item }) => <HerbCard herb={item} />}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            ) : (
              <Text style={styles.noResults}>
                No herbs found matching "{searchQuery}"
              </Text>
            )}
          </View>
        ) : (
          <>
            <View style={styles.categoriesContainer}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesScroll}>
                <CategoryButton
                  title="All"
                  id="all"
                  active={activeCategory === 'all'}
                  onPress={() => setActiveCategory('all')}
                />
                {categoryData.map(category => (
                  <CategoryButton
                    key={category.id}
                    title={category.name}
                    id={category.id}
                    active={activeCategory === category.id}
                    onPress={() => setActiveCategory(category.id)}
                    icon={category.icon}
                  />
                ))}
              </ScrollView>
            </View>

            <View style={styles.featuredContainer}>
              <Text style={styles.sectionTitle}>Featured Herbs</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.featuredScroll}>
                {featuredHerbs.map(herb => (
                  <HerbCard key={herb.id} herb={herb} featured />
                ))}
              </ScrollView>
            </View>

            <View style={styles.popularContainer}>
              <Text style={styles.sectionTitle}>Popular Herbs</Text>
              {popularHerbs.map(herb => (
                <HerbCard key={herb.id} herb={herb} />
              ))}
            </View>
          </>
        )}
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
  greeting: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.textPrimary,
    marginTop: SPACING.small,
  },
  categoriesContainer: {
    marginTop: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  categoriesScroll: {
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.small,
  },
  featuredContainer: {
    marginTop: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  featuredScroll: {
    paddingVertical: SPACING.small,
    paddingRight: SPACING.medium,
  },
  popularContainer: {
    marginTop: SPACING.medium,
    marginBottom: SPACING.large,
    paddingHorizontal: SPACING.medium,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
  },
  searchResults: {
    marginTop: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    paddingBottom: SPACING.large,
  },
  noResults: {
    ...FONTS.body2,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.medium,
  },
});