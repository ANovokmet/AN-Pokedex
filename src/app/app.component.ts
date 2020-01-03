import { Component } from '@angular/core';
import { MyPokemonService } from './my-pokemon.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'an-pokedex';

    constructor(public myPokemonService: MyPokemonService) {

    }
}
