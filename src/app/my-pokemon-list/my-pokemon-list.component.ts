import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../my-pokemon.service';

@Component({
    selector: 'app-my-pokemon-list',
    templateUrl: './my-pokemon-list.component.html',
    styleUrls: ['./my-pokemon-list.component.scss']
})
export class MyPokemonListComponent implements OnInit {


    constructor(public myPokemonService: MyPokemonService) {

    }

    ngOnInit() {
    }

}
