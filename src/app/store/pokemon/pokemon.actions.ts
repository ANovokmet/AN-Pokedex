import { createAction, props } from '@ngrx/store';
import { ApiResource } from 'src/app/core/models/api-resource-list';
import { Pokemon } from 'src/app/core/models/pokemon';

export const loadPokemon = createAction(
    '[Pokemon] Load Pokemons',
    props<{ allPokemon: ApiResource[] }>()
);

export const updateSearch = createAction(
    '[Pokemon] Update search',
    props<{ searchValue: string }>()
);

export const addToMyPokemon = createAction(
    '[Pokemon] Add to My Pokemon',
    props<{ pokemon: Pokemon }>()
);

export const removeFromMyPokemon = createAction(
    '[Pokemon] Remove from My Pokemon',
    props<{ name: string }>()
);

