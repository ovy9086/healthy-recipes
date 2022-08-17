import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { BaseRecipeFragment } from '../../generated/graphql';
import { RootStackParamsList } from '../../Navigation';
import { branding } from '../../styleguide';
import { PressableCard } from '../PressableCard';
import RecipeCard, { RecipeCardPlaceholder } from '../RecipeCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

export const RECIPE_CARD_WIDTH = 200;

export const RecipeSlider: FunctionComponent<{
  recipes: BaseRecipeFragment[];
  loading: boolean;
}> = ({ recipes, loading }) => {
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
        {loading ? (
          <LoadingIndicator />
        ) : (
          recipes.map(recipe => {
            return (
              <PressableCard
                style={styles.card}
                key={recipe.id}
                onPress={() => navigation.navigate('Details', { recipe })}
              >
                <RecipeCard recipe={recipe} />
              </PressableCard>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const LoadingIndicator = () => {
  return (
    <>
      {Array.from(Array(4).keys()).map(i => {
        return <RecipeCardPlaceholder key={`placeholder-${i}`} style={styles.card} />;
      })}
    </>
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
    width: RECIPE_CARD_WIDTH,
    marginRight: branding.paddings.padding_16
  }
});
