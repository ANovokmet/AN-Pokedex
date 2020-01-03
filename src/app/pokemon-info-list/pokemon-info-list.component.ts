import { Component, OnInit, Input } from '@angular/core';

/**
 * Displays a list of pokemon names with links to their detail page.
 * Implements a virtual scroll.
 */
@Component({
    selector: 'app-pokemon-info-list',
    templateUrl: './pokemon-info-list.component.html',
    styleUrls: ['./pokemon-info-list.component.scss']
})
export class PokemonInfoListComponent implements OnInit {

    @Input() model: { name: string, id: number }[];

    constructor() { }

    ngOnInit() {
    }

}
