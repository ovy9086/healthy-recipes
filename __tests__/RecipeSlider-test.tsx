import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { RecipeSlider } from '../src/Components/Home/RecipeSlider';
import { NavigationContainer } from '@react-navigation/native';
import { BaseRecipeFragment } from '../src/generated/graphql';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => {}
  };
});

describe('RecipeSlider', () => {
  it('Renders only placeholders while loading', async () => {
    const { queryAllByTestId, queryByTestId } = render(
      <NavigationContainer>
        <RecipeSlider loading={true} recipes={[]} />
      </NavigationContainer>
    );
    const placeholder = await queryAllByTestId('recipe-card-placeholder');
    const recipes = await queryByTestId('recipe-card');
    expect(placeholder.length).toBe(4);
    expect(recipes).toBeFalsy();
  });

  it('Renders only recipe cards when done loading', async () => {
    const mockRecipes = [
      { title: 'title', images: { hz: '', vt: '' }, id: '1', time: { cook: 0, preparation: 0 } }
    ] as BaseRecipeFragment[];
    const { queryAllByTestId, queryByTestId } = render(
      <NavigationContainer>
        <RecipeSlider loading={false} recipes={mockRecipes} />
      </NavigationContainer>
    );
    const placeholder = await queryByTestId('recipe-card-placeholder');
    const recipes = await queryAllByTestId('recipe-card');
    expect(placeholder).toBeFalsy();
    expect(recipes.length).toBe(mockRecipes.length);
  });
});
