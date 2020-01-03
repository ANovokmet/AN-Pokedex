import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPokemon from './pokemon.reducer';

export const selectPokemonState = createFeatureSelector<fromPokemon.State>(
  fromPokemon.pokemonFeatureKey
);

export const selectAllPokemon = createSelector(selectPokemonState, state => state.allPokemon);
export const selectMyPokemon = createSelector(selectPokemonState, state => state.myPokemon);
export const selectSearchValue = createSelector(selectPokemonState, state => state.searchValue);

export const selectFilteredPokemon = createSelector(selectSearchValue, selectAllPokemon, (searchValue, allPokemon) => {
    if (!allPokemon) {
        return null;
    }
    const filterValue = searchValue.toLowerCase();
    return allPokemon.filter(p => p.name.toLowerCase().includes(filterValue));
});
