import { RecipeUrlParams } from './recipeUrlParams.model';
import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesData = new Subject<{ recipes: Array<any>, action: string; }>();
  private recipesDataError = new Subject<Response>();
  private newIngredient = new Subject<string>();
  private newCourse = new Subject<string>();

  private recipeUrlParams = new RecipeUrlParams();
  private currentPage = 1;

  constructor(private http: Http) { }

  getRecipes = (recipeUrlParams: RecipeUrlParams) => {
    this.recipeUrlParams = recipeUrlParams;
    this.recipeUrlParams.p = this.currentPage;

    return this.http.get('/recipes/', { params: this.recipeUrlParams })
      .pipe(map((res: Response) => res.json()))
      .subscribe((recipes) => {

        // check for adding or replacing
        const action = this.currentPage === 1 ? 'replace' : 'add';

        // attach the data
        this.recipesData.next({ recipes: recipes.results, action: action });
      },
        (error: Response) => {
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
