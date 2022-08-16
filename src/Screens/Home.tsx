import React, { useEffect, useState } from 'react';
import { ViewStyle, ImageBackground } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { HomeHeader } from '../Components/Home/HomeHeader';
import { RecipeCategories } from '../Components/Home/RecipeCategories';
import { RecipeSlider } from '../Components/Home/RecipeSlider';
import { Recipe, recipesService } from '../Services/RecipesService';
import { branding } from '../styleguide';

export default function HomeScreen() {
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });
  const headerStyle = useAnimatedStyle<ViewStyle>(() => {
    return {
      transform: [
        {
          translateY: interpolate(translationY.value, [0, 200], [0, 150], Extrapolate.EXTEND)
        }
      ]
    };
  });

  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
  useEffect(() => {
    recipesService.getFreeRecipes().then(setRecipes);
  }, []);

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../Assets/Limeade.jpg')}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: branding.paddings.padding_32 }}
      >
        <HomeHeader style={headerStyle} />
        <RecipeSlider recipes={recipes} />
        <RecipeCategories
          categories={[
            'Keto desserts',
            'Keto bread',
            'High protein',
            'Vegetarian meals',
            'Chicken dinners'
          ]}
        />
        <RecipeCategories
          categories={[
            'Keto desserts',
            'Keto bread',
            'High protein',
            'Vegetarian meals',
            'Chicken dinners'
          ]}
        />
        <RecipeCategories
          categories={[
            'Keto desserts',
            'Keto bread',
            'High protein',
            'Vegetarian meals',
            'Chicken dinners'
          ]}
        />
        <RecipeCategories
          categories={[
            'Keto desserts',
            'Keto bread',
            'High protein',
            'Vegetarian meals',
            'Chicken dinners'
          ]}
        />
      </Animated.ScrollView>
    </ImageBackground>
  );
}
