import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MyPokemonListComponent } from './my-pokemon-list/my-pokemon-list.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'pokemon-list', pathMatch: 'full'
    },
    {
        path: 'pokemon-list', component: PokemonListComponent
    },
    {
        path: 'pokemon/:name', component: PokemonDetailComponent
    },
    {
        path: 'my-pokemon-list', component: MyPokemonListComponent
    }
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
