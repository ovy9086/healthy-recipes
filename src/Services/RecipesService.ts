import { mockRecipes } from '../../Assets/mockRecipes';

export type Recipe = {
  id: string;
  title: string;
  images: { hz: string; vt: string };
  description: string;
  rating: number;
  time: {
    preparation: number;
    cook: number;
  };
  nutrition: { values: { [K in NutritionValues]?: number } };
};

type NutritionValues = 'carbs' | 'fat' | 'protein' | 'fiber' | 'calories';

class RecipesService {
  getFreeRecipes(): Promise<Recipe[]> {
    return Promise.resolve(mockRecipes.data.listRecipes.recipes);
  }
}

export const recipesService = new RecipesService();
