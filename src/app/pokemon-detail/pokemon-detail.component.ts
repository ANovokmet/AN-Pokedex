import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, shareReplay, take } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

import { PokemonService } from '../core/api/pokemon.service';
import { Pokemon } from '../core/models/pokemon';
import { MyPokemonService } from '../my-pokemon.service';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

    pokemon$: Observable<Pokemon>;
    isInMyPokemon$: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService,
        private myPokemonService: MyPokemonService
    ) {

        this.pokemon$ = this.route.paramMap.pipe(
            map(params => params.get('name')),
            take(1),
            switchMap(name => this.pokemonService.get(name)),
            shareReplay(1)
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
