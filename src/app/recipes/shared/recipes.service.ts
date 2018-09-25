import { RecipeUrlParams } from './recipeUrlParams.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';
import { Subject } from 'rxjs';
import { RecipeData } from './recipeData.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesData = new Subject<{ recipes: Array<RecipeData>, action: string; }>();
  private recipesDataError = new Subject<HttpEvent<Object>>();
  private newIngredient = new Subject<string>();
  private newCourse = new Subject<string>();

  private recipeUrlParams = new RecipeUrlParams();
  private currentPage = 1;

  constructor(private httpClient: HttpClient) { }

  getRecipes = (recipeUrlParams: RecipeUrlParams) => {
    this.recipeUrlParams = recipeUrlParams;
    this.recipeUrlParams.p = this.currentPage;

    // add params
    let httpParams = new HttpParams();
    Object.keys(recipeUrlParams).forEach((key) => {
      httpParams = httpParams.append(key, recipeUrlParams[key]);
    });

    return this.httpClient.get('/recipes/', { params: httpParams })
      .subscribe((recipes: RecipeData[]) => {

        // check for adding or replacing
        const action = this.currentPage === 1 ? 'replace' : 'add';

        // attach the data
        this.recipesData.next({ recipes: recipes, action: action });
      },
        (error: HttpEvent<Object>) => {
          // show the error message
          this.recipesDataError.next(error);
        });
  }

  getNewRecipes = (recipeUrlParams) => {
    this.currentPage = 1;
    this.getRecipes(recipeUrlParams);
  }

  getMoreRecipes = () => {
    this.currentPage++;
    this.getRecipes(this.recipeUrlParams);
  }

  addIngredient = (ingredient: string) => {
    this.newIngredient.next(ingredient);
  }

  addCourse = (course: string) => {
    this.newCourse.next(course);
  }

  getRecipesData = () => {
    return this.recipesData;
  }

  getRecipesDataError = () => {
    return this.recipesDataError;
  }

  getNewIngredient = () => {
    return this.newIngredient;
  }

  getNewCourse = () => {
    return this.newCourse;
  }


}
