import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { PlazaComponent } from './plaza/plaza.component';
import { TavernComponent } from './tavern/tavern.component';
import { MuseumComponent } from './museum/museum.component';
import { TrainingHallComponent } from './training-hall/training-hall.component';
import { TempleComponent } from './temple/temple.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LostComponent } from './lost/lost.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityService } from './activity.service';
import { TailorComponent } from './tailor/tailor.component';
import { NgParticlesModule } from 'ng-particles';
import { ReferenceComponent } from './reference/reference.component';
import { SocialsComponent } from './socials/socials.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { socials } from '../data/socials';
import { MelodyComponent } from './melody/melody.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LibraryComponent,
    PlazaComponent,
    TavernComponent,
    MuseumComponent,
    TrainingHallComponent,
    TempleComponent,
    ConfirmComponent,
    LostComponent,
    TailorComponent,
    ReferenceComponent,
    SocialsComponent,
    MelodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule,
    FontAwesomeModule,
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...socials.map((social) => social.icon));
  }
}
