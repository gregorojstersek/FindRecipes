import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesSearchComponent } from './recipes/recipes-search/recipes-search.component';
import { RecipesDisplayComponent } from './recipes/recipes-display/recipes-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesSearchComponent,
    RecipesDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
