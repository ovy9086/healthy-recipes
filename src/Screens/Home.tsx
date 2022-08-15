import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, ViewStyle, ViewProps, StyleSheet, ImageBackground } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecipeCategories } from '../Components/Home/RecipeCategories';
import { RecipeSlider } from '../Components/Home/RecipeSlider';
import { PressableCard } from '../Components/PressableCard';
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
        <Header style={headerStyle} />
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

const Header: FunctionComponent<ViewProps> = props => (
  <Animated.View style={[styles.header, props.style]}>
    <SafeAreaView>
      <Text style={styles.title}>Eat</Text>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        {['Breakfast', 'Deserts', 'Dinner'].map((it, idx) => {
          return (
            <PressableCard key={`card-${idx}`} style={styles.card}>
              <Text style={branding.heading.h4}>{it}</Text>
            </PressableCard>
          );
        })}
      </View>
    </SafeAreaView>
  </Animated.View>
);

const styles = StyleSheet.create({
  header: { width: '100%', padding: branding.paddings.padding_16 },
  title: { ...branding.heading.h1, marginBottom: branding.paddings.padding_8 },
  card: {
    marginRight: branding.paddings.padding_16
  }
});
