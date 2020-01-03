import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from './core/models/pokemon';
import { State } from './store';
import { PokemonService } from './core/api/pokemon.service';
import { selectMyPokemon } from './store/pokemon/pokemon.selectors';
import { removeFromMyPokemon, addToMyPokemon } from './store/pokemon/pokemon.actions';

@Injectable()
export class MyPokemonService {

    public myPokemon: Pokemon[];
    myPokemon$: Observable<Pokemon[]>;

    constructor(
        private pokemonService: PokemonService,
        private store$: Store<State>
    ) {
        this.myPokemon$ = store$.pipe(select(selectMyPokemon));

        this.myPokemon$.subscribe(myPokemon => {
            this.myPokemon = myPokemon;
        });
    }

    add(pokemon: Pokemon) {
        const item = this.myPokemon.find(s => s.name === pokemon.name);
        if (!item) {
            this.store$.dispatch(addToMyPokemon({pokemon}));
        }
    }

    addByName(name: string) {
        const item = this.myPokemon.find(s => s.name === name);
        if (!item) {
            this.pokemonService.get(name).subscribe(pokemon => {
                this.store$.dispatch(addToMyPokemon({pokemon}));
            });
        }
    }

    remove(name: string) {
        this.store$.dispatch(removeFromMyPokemon({name}));
    }
}
