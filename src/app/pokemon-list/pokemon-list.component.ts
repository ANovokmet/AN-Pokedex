import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { shareReplay, map, switchMap, take, debounceTime, startWith, tap, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';

import { PokemonService } from '../core/api/pokemon.service';
import { ApiResourceList, ApiResource } from '../core/models/api-resource-list';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { selectPokemonState, selectSearchValue, selectFilteredPokemon } from '../store/pokemon/pokemon.selectors';
import { updateSearch, loadPokemon } from '../store/pokemon/pokemon.actions';

const PAGE_LIMIT = 934;

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    pokemonResources$: Observable<ApiResourceList>;
    filteredPokemon$: Observable<ApiResource[]>;
    searchControl = new FormControl('');

    constructor(
        private pokemonService: PokemonService,
        private store$: Store<State>
    ) {
        // this.pokemonResources$ = pokemonService.getAll().pipe(shareReplay(1));

        this.store$.pipe(select(selectSearchValue)).subscribe(value => {
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
}
