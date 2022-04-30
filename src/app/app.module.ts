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
import { TrainingHallComponent } from './training-hall/training-hall.component';
import { TempleComponent } from './temple/temple.component';
import { CastleComponent } from './castle/castle.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LostComponent } from './lost/lost.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LibraryComponent,
    PlazaComponent,
    ArenaComponent,
    TavernComponent,
    MuseumComponent,
    TrainingHallComponent,
    TempleComponent,
    CastleComponent,
    ConfirmComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
