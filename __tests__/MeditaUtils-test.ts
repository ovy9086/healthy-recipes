import 'react-native';
import { PixelRatio } from 'react-native';
import { BaseRecipeFragment } from '../src/generated/graphql';
import MediaUtils from '../src/Utils/MediaUtils';

const mockRecipe = { images: { hz: 'https:/i.com/1', vt: 'https:/i.com/2' } } as BaseRecipeFragment;

describe('MediaUtils', () => {
  test('Builds url without sizes', () => {
    const url = MediaUtils.getImage(mockRecipe).build();
    expect(url).toBeTruthy();
  });
  test('Throws error when no URL', () => {
    expect(MediaUtils.getImage(mockRecipe).build).toThrow();
  });
  test('Sets DP size when specified', () => {
    const url = MediaUtils.getImage(mockRecipe).withSize(100, 100).build();
    const expected = PixelRatio.getPixelSizeForLayoutSize(100);
    expect(url).toContain(`w=${expected}`);
    expect(url).toContain(`h=${expected}`);
  });
});
