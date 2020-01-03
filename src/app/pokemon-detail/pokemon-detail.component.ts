import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, shareReplay, take, catchError } from 'rxjs/operators';
import { Observable, combineLatest, empty } from 'rxjs';

import { PokemonService } from '../core/api/pokemon.service';
import { Pokemon } from '../core/models/pokemon';
import { MyPokemonService } from '../my-pokemon.service';

/**
 * Page containing details of a pokemon.
 */
@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
    pokemon$: Observable<Pokemon>;
    isInMyPokemon$: Observable<boolean>;
    error: any;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService,
        private myPokemonService: MyPokemonService
    ) {

        this.pokemon$ = this.route.paramMap.pipe(
            map(params => params.get('name')),
            take(1),
            switchMap(name => this.pokemonService.get(name)),
            shareReplay(1),
            catchError(e => { this.error = e; return empty(); })
        );

        this.isInMyPokemon$ = combineLatest(
            this.pokemon$,
            this.myPokemonService.myPokemon$,
            (pokemon, myPokemon) => !!myPokemon.find(p => pokemon.name === p.name)
        );
    }

    ngOnInit() {
    }

    onAddToMyPokemon() {
        this.pokemon$.pipe(take(1)).subscribe(pokemon => {
            this.myPokemonService.add(pokemon);
        });
    }

    onRemoveFromMyPokemon() {
        this.pokemon$.pipe(take(1)).subscribe(pokemon => {
            this.myPokemonService.remove(pokemon.name);
        });
    }
}
