import 'react-native';
import { PixelRatio } from 'react-native';
import { mockRecipes } from '../Assets/mockRecipes';
import { Recipe } from '../src/Services/RecipesService';
import MediaUtils from '../src/Utils/MediaUtils';

describe('MediaUtils', () => {
  test('Builds url without sizes', () => {
    const url = MediaUtils.getImage(mockRecipes.data.listRecipes.recipes[0]).build();
    expect(url).toBeTruthy();
  }),
    test('Throws error when no URL', () => {
      expect(MediaUtils.getImage({ images: {} } as Recipe).build).toThrow();
    }),
    test('Sets DP size when specified', () => {
      const url = MediaUtils.getImage(mockRecipes.data.listRecipes.recipes[0])
        .withSize(100, 100)
        .build();
      const expected = PixelRatio.getPixelSizeForLayoutSize(100);
      expect(url).toContain(`w=${expected}`);
      expect(url).toContain(`h=${expected}`);
    });
});
