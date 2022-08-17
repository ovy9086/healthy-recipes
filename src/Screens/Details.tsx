import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ImageStyle,
  useWindowDimensions,
  StyleSheet
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { RootStackParamsList } from '../Navigation';
import { branding } from '../styleguide';
import MediaUtils from '../Utils/MediaUtils';

type RouteProps = RouteProp<RootStackParamsList, 'Details'>;

export default function DetailsScreen() {
  const dimensions = useWindowDimensions();
  const route = useRoute<RouteProps>();
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });
  const headerStyle = useAnimatedStyle<ImageStyle>(() => {
    return {
      width: '100%',
      height: dimensions.height * 0.5,
      transform: [
        {
          translateY: interpolate(translationY.value, [0, 200], [0, 150], Extrapolate.EXTEND)
        },
        {
          scale: interpolate(translationY.value, [-100, 0], [1.5, 1], Extrapolate.CLAMP)
        }
      ]
    };
  });

  const { recipe } = route.params;
  const steps = recipe.instructionSections.map(instructions => instructions.steps).flat();
  return (
    <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16} style={styles.root}>
      <View style={{ flex: 1 }}>
        <Animated.Image style={headerStyle} source={{ uri: MediaUtils.getImage(recipe).build() }} />
        <View style={styles.container}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          {steps.map((step, idx) => {
            return (
              <Text key={`step-${idx}`} style={styles.step}>
                {`${idx + 1}. ${step}`}
              </Text>
            );
          })}
        </View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: branding.themeColors.white
  },
  container: {
    backgroundColor: branding.themeColors.white,
    paddingHorizontal: branding.paddings.padding_16,
    paddingBottom: branding.paddings.padding_64
  },
  title: {
    ...branding.heading.h1,
    marginVertical: branding.paddings.padding_16
  },
  description: {
    ...branding.heading.h3,
    fontStyle: 'italic',
    marginVertical: branding.paddings.padding_8
  },
  step: {
    ...branding.heading.h3,
    marginVertical: branding.paddings.padding_8
  }
});
