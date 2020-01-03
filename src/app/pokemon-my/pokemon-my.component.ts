import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MyPokemonService } from '../my-pokemon.service';
import { Pokemon } from '../core/models/pokemon';

/**
 * Page displaying My Pokemon.
 */
@Component({
    selector: 'app-pokemon-my',
    templateUrl: './pokemon-my.component.html',
    styleUrls: ['./pokemon-my.component.scss']
})
export class PokemonMyComponent implements OnInit {

    myPokemon$: Observable<Pokemon[]>;

    constructor(myPokemonService: MyPokemonService) {
        this.myPokemon$ = myPokemonService.myPokemon$;
    }

    ngOnInit() {
    }

}
