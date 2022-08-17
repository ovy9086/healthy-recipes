import { PixelRatio } from 'react-native';
import { BaseRecipeFragment } from '../generated/graphql';

class MediaUtils {
  getImage(recipe: BaseRecipeFragment) {
    return new ImageBuilder(recipe.images.hz);
  }
}

class ImageBuilder {
  private width?: number;
  private height?: number;

  constructor(readonly url: string) {}

  /**
   * @param width - withd in DP
   * @param height - height in DP
   */
  withSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    return this;
  }
  build() {
    if (!this.width || !this.height) {
      if (!this.url) {
        throw new Error('No image url was specified!');
      } else {
        //Loading full size image
        return `https://i.dietdoctor.com/${this.url}`;
      }
    }
    const widthPx = PixelRatio.getPixelSizeForLayoutSize(this.width),
      heightPx = PixelRatio.getPixelSizeForLayoutSize(this.height);
    return `https://i.dietdoctor.com/${this.url}?auto=format&w=${widthPx}&h=${heightPx}`;
  }
}

export default new MediaUtils();
