import { View, Text, Image, StyleSheet } from 'react-native';
import React, { FunctionComponent } from 'react';
import { Recipe } from '../Services/RecipesService';
import { branding } from '../styleguide';
import MediaUtils from '../Utils/MediaUtils';

export const RECIPE_CARD_WIDTH = 200;

const RecipeCard: FunctionComponent<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <View style={{ width: RECIPE_CARD_WIDTH }}>
      <View style={styles.shadowContainer}>
        <Image
          style={styles.image}
          source={{ uri: MediaUtils.getImage(recipe).withSize(200, 150).build() }}
        />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.duration}>{recipe.time.cook + recipe.time.preparation} mins</Text>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  shadowContainer: {
    width: RECIPE_CARD_WIDTH,
    marginTop: branding.paddings.padding_8,
    ...branding.shadowCard
  },
  title: {
    marginTop: branding.paddings.padding_8
  },
  duration: {
    ...branding.body.body
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: branding.themeColors.gray,
    borderRadius: branding.paddings.padding_16
  }
});
