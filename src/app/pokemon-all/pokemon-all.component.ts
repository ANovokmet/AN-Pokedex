import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, tap, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { PokemonService } from '../core/api/pokemon.service';
import { ApiResourceList, ApiResource } from '../core/models/api-resource-list';
import { State } from '../store';
import { selectSearchValue, selectFilteredPokemon } from '../store/pokemon/pokemon.selectors';
import { updateSearch, loadPokemon } from '../store/pokemon/pokemon.actions';

const PAGE_LIMIT = 934;

/**
 * Page displaying all pokemon.
 */
@Component({
    selector: 'app-pokemon-all',
    templateUrl: './pokemon-all.component.html',
    styleUrls: ['./pokemon-all.component.scss']
})
export class PokemonAllComponent implements OnInit, OnDestroy {
    pokemonResources$: Observable<ApiResourceList>;
    filteredPokemon$: Observable<ApiResource[]>;
    searchControl = new FormControl('');
    searchValueSubscription: Subscription;

    constructor(
        private pokemonService: PokemonService,
        private store$: Store<State>
    ) {
        this.searchValueSubscription = this.store$.pipe(select(selectSearchValue)).subscribe(value => {
            this.searchControl.setValue(value, { emitEvent: false });
        });

        this.filteredPokemon$ = this.store$.pipe(
            select(selectFilteredPokemon),
            tap(pokemon => {
                if (!pokemon) {
                    this.loadPokemon();
                }
            }),
            filter(pokemon => !!pokemon)
        );

        this.searchControl.valueChanges.pipe(
            debounceTime(300)
        ).subscribe(searchValue => {
            this.store$.dispatch(updateSearch({ searchValue }));
        });
    }

    loadPokemon() {
        this.pokemonService.getAll(PAGE_LIMIT).subscribe(response => {
            this.store$.dispatch(loadPokemon({ allPokemon: response.results }));
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.searchValueSubscription.unsubscribe();
    }
}
