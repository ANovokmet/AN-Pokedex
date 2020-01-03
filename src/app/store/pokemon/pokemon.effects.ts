import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as PokemonActions from './pokemon.actions';


@Injectable()
export class PokemonEffects {


  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
