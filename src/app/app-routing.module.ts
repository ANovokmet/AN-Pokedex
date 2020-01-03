import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonAllComponent } from './pokemon-all/pokemon-all.component';
import { PokemonMyComponent } from './pokemon-my/pokemon-my.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'pokemon-all', pathMatch: 'full'
    },
    {
        path: 'pokemon-all', component: PokemonAllComponent
    },
    {
        path: 'pokemon/:name', component: PokemonDetailComponent
    },
    {
        path: 'pokemon-my', component: PokemonMyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
