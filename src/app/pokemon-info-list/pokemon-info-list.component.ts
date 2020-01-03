import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-info-list',
    templateUrl: './pokemon-info-list.component.html',
    styleUrls: ['./pokemon-info-list.component.scss']
})
export class PokemonInfoListComponent implements OnInit {

    @Input() model: { name: string }[];

    constructor() { }

    ngOnInit() {
    }

}
