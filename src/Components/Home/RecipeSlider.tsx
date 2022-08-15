import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Recipe } from '../../Services/RecipesService';
import { branding } from '../../styleguide';
import { PressableCard } from '../PressableCard';
import RecipeCard, { RECIPE_CARD_WIDTH } from '../RecipeCard';

export const RecipeSlider: FunctionComponent<{ recipes?: Recipe[] }> = ({ recipes }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Try these, selected for you</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        snapToInterval={RECIPE_CARD_WIDTH + branding.paddings.padding_16}
        decelerationRate={'fast'}
      >
        {recipes?.map(recipe => {
          return (
            <PressableCard
              style={styles.card}
              key={recipe.id}
              onPress={() => console.log('GO TO RECIPE DETAILS')}
            >
              <RecipeCard recipe={recipe} />
            </PressableCard>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { paddingLeft: branding.paddings.padding_16 },
  title: {
    paddingLeft: branding.paddings.padding_16,
    ...branding.heading.h3
  },
  contentContainer: {
    flex: 1,
    backgroundColor: branding.themeColors.white,
    borderTopLeftRadius: 30,
    paddingVertical: branding.paddings.padding_16
  },
  card: {
    marginRight: branding.paddings.padding_16
  }
});
