import { RecipesService } from './../shared/recipes.service';
import { Component, OnInit } from '@angular/core';
import { RecipeUrlParams } from '../shared/recipeUrlParams.model';

@Component({
  selector: 'app-recipes-search',
  templateUrl: './recipes-search.component.html'
})
export class RecipesSearchComponent implements OnInit {

  ingredients: string;
  course: string;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getNewIngredient().subscribe((ingredient: string) => {
      this.addIngredientToIngredients(ingredient);
    });

    this.recipesService.getNewCourse().subscribe((course: string) => {
      this.replaceCourse(course);
    });
  }

  canSearch = () => {
    return this.ingredients && this.ingredients.trim() !== '' || this.course;
  }

  search = () => {
    const urlParams = new RecipeUrlParams();
    urlParams.i = this.ingredients;

    if (this.course && this.course.trim() !== '') {
      urlParams.q = this.course;
    }

    this.recipesService.getNewRecipes(urlParams);
  }

  addIngredientToIngredients = (ingredient: string) => {
    if (this.ingredients && this.ingredients.trim() !== '') {

      if (!this.ingredients.split(', ').includes(ingredient)) {
        this.ingredients += `, ${ingredient}`;
      }

    } else {
      this.ingredients = ingredient;
    }
  }

  replaceCourse = (course) => {
    this.course = course;
  }

}


