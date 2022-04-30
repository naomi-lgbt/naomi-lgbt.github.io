import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { PlazaComponent } from './plaza/plaza.component';
import { ArenaComponent } from './arena/arena.component';
import { TavernComponent } from './tavern/tavern.component';
import { MuseumComponent } from './museum/museum.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LibraryComponent,
    PlazaComponent,
    ArenaComponent,
    TavernComponent,
    MuseumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
