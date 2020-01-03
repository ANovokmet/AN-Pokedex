import { Action, createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';
import { ApiResource } from 'src/app/core/models/api-resource-list';
import { Pokemon } from 'src/app/core/models/pokemon';

export const pokemonFeatureKey = 'pokemon';

export interface State {
    allPokemon: ApiResource[];
    myPokemon: Pokemon[];
    searchValue: string;
}

export const initialState: State = {
    allPokemon: null,
    myPokemon: [],
    searchValue: ''
};

const pokemonReducer = createReducer(
    initialState,
    on(PokemonActions.loadPokemon, (state, action) => ({ ...state, allPokemon: action.allPokemon })),
    on(PokemonActions.updateSearch, (state, action) => ({ ...state, searchValue: action.searchValue })),
    on(PokemonActions.addToMyPokemon, (state, action) => ({
        ...state,
        myPokemon: [...state.myPokemon, action.pokemon]
    })),
    on(PokemonActions.removeFromMyPokemon, (state, action) => ({
        ...state,
        myPokemon: state.myPokemon.filter(p => p.name !== action.name)
    })),
);

export function reducer(state: State | undefined, action: Action) {
    return pokemonReducer(state, action);
}
