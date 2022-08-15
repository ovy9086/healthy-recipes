import { Recipe } from '../Services/RecipesService';

class MediaUtils {
  getImage(recipe: Recipe) {
    return `https://i.dietdoctor.com/${recipe.images.vt}`;
  }
}

export default new MediaUtils();
