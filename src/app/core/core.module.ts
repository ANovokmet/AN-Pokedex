import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './api/pokemon.service';
import { DeKebabCasePipe } from './pipes/de-kebab-case.pipe';

@NgModule({
    declarations: [DeKebabCasePipe],
    imports: [
        CommonModule
    ],
    providers: [
        PokemonService
    ],
    exports: [DeKebabCasePipe]
})
export class CoreModule { }
