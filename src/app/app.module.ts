import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { MyPokemonListComponent } from './my-pokemon-list/my-pokemon-list.component';
import { MyPokemonService } from './my-pokemon.service';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { PokemonInfoListComponent } from './pokemon-info-list/pokemon-info-list.component';

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonInfoComponent,
        MyPokemonListComponent,
        PokemonInfoListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        ScrollingModule
    ],
    providers: [MyPokemonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
