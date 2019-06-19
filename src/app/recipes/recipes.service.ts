import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'f@',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqaUECF7lWuEmtgVENGfI6mDgsj4G6_nXqZm72uKr8CHuFg6_YA',
      ingredients: ['potato', 'salad']
    },
    {
      id: 'r2',
      title: 'kk',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71UVFl%2Bw3jL._SL1074_.jpg',
      ingredients: ['guarana', 'qwweqwe']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
