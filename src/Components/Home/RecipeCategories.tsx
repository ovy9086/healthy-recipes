import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { branding } from '../../styleguide';
import { PressableCard } from '../PressableCard';

export const RecipeCategories: FunctionComponent<{ categories: string[] }> = ({ categories }) => {
  return (
    categories && (
      <View>
        <Text style={styles.title}>Recipe categories</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          {categories?.map(category => {
            return (
              <PressableCard key={`category-${category}`} style={styles.card}>
                <Text style={branding.body.body} numberOfLines={2}>
                  {category}
                </Text>
              </PressableCard>
            );
          })}
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  title: {
    padding: branding.paddings.padding_16,
    ...branding.heading.h3
  },
  container: {
    paddingLeft: branding.paddings.padding_16
  },
  card: {
    height: 70,
    width: 120,
    justifyContent: 'flex-end',
    padding: branding.paddings.padding_8,
    backgroundColor: branding.themeColors.white,
    borderRadius: 10,
    marginRight: branding.paddings.padding_8
  }
});
