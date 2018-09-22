import { RecipesService } from './recipes/shared/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  recipesDataError: boolean;

  commonIngredients: Array<string> = [
    'eggs',
    'garlic',
    'onion'
  ];

  commoCourses: Array<string> = [
    'omlet',
    'noodles',
    'pizza'
  ];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipesDataError().subscribe(() => {
      this.recipesDataError = true;
    });
  }

  addIngredient = (ingredient: string) => {
    this.recipesService.addIngredient(ingredient);
  }

  addCourse = (course: string) => {
    this.recipesService.addCourse(course);
  }
}
