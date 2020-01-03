import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pokemon } from '../core/models/pokemon';

/**
 * Displays data about a single pokemon.
 */
@Component({
    selector: 'app-pokemon-info',
    templateUrl: './pokemon-info.component.html',
    styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
    movesLimit = 5;

    @Output() addedToMyPokemon = new EventEmitter<Pokemon>();
    @Output() removedFromMyPokemon = new EventEmitter<Pokemon>();

    @Input() isInMyPokemon: boolean;
    @Input() model: Pokemon;

    constructor() { }

    ngOnInit() {
    }

    onExpandMoves() {
        this.movesLimit += 50;
    }
}
