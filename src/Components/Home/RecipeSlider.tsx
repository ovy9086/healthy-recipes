import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamsList } from '../../Navigation';
import { Recipe } from '../../Services/RecipesService';
import { branding } from '../../styleguide';
import { PressableCard } from '../PressableCard';
import RecipeCard, { RECIPE_CARD_WIDTH } from '../RecipeCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

export const RecipeSlider: FunctionComponent<{ recipes?: Recipe[] }> = ({ recipes }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
              onPress={() => navigation.navigate('Details', { recipe })}
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
