# Find recipes

A [[https://find-recipes-176545.herokuapp.com/][web application]] that finds recipes based on igredients and courses.

## Preview

[[https://user-images.githubusercontent.com/9784551/45925451-caa79980-bf15-11e8-860a-558700360bcf.gif]]

## Install 

Make sure you clone the repo with the submodule

```sh
git clone --recurse-submodules https://github.com/gregorojstersek/FindRecipes.git
```

Make sure you have nodemon installed as a global package.

```sh
npm install -g nodemon
```

Navigate to the server folder and run:

```sh
npm install
```

After installing all the packages in the server folder, navigate to the root of the project and run:

```sh
npm install
```

Let's start the app.

```sh
npm start 
```

That will start the express server on localhost:3000 and client app on localhost:4200.

## Server side 

You can check the [[https://github.com/gregorojstersek/RecipePuppyApiHandling][repo]] for more info. 

## Client side

### Functionalities

* search by different ingredients
* search by different courses
* displaying the recipes with the title, image, ingredients and url to the site where full recipe is available
* you can click on different ingredients and add them to the search
* 10 recipes are show at a time - you can click "Show more" if you want to see more recipes within a search

