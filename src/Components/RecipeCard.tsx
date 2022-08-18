import { View, Text, Image, StyleSheet, ViewProps } from 'react-native';
import React, { FunctionComponent } from 'react';
import { branding } from '../styleguide';
import MediaUtils from '../Utils/MediaUtils';
import { BaseRecipeFragment } from '../generated/graphql';

const RecipeCard: FunctionComponent<ViewProps & { recipe: BaseRecipeFragment }> = ({
  recipe,
  style
}) => {
  return (
    <View style={style} testID='recipe-card'>
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

export const RecipeCardPlaceholder: FunctionComponent<ViewProps> = ({ style }) => {
  return (
    <View style={style} testID='recipe-card-placeholder'>
      <View style={styles.shadowContainer}>
        <View style={styles.image} />
      </View>
      <Text style={[styles.title, styles.textPlaceholder]}> </Text>
      <Text style={[styles.duration, styles.textPlaceholder]}> </Text>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    marginTop: branding.paddings.padding_8,
    ...branding.shadowCard
  },
  title: {
    marginTop: branding.paddings.padding_8
  },
  duration: {
    marginTop: 4,
    ...branding.body.body
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: branding.themeColors.gray,
    borderRadius: branding.paddings.padding_16
  },
  textPlaceholder: {
    backgroundColor: branding.themeColors.gray
  }
});
