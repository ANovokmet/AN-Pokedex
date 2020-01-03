import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromPokemon from './pokemon/pokemon.reducer';

export interface State {
    [fromPokemon.pokemonFeatureKey]: fromPokemon.State;
}

export const reducers: ActionReducerMap<State> = {
    pokemon: fromPokemon.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
