import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),

    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://httpproject-279-286-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      );
    }),
    map((recipes) => {
      return recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        };
      });
    }),
    map((recipes) => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({ dispatch: false })
  storeRecipe = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://httpproject-279-286-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
