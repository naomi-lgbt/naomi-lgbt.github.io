import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { NgParticlesModule } from "ng-particles";

import { socials } from "../data/socials";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { LandingComponent } from "./landing/landing.component";
import { LibraryComponent } from "./library/library.component";
import { LostComponent } from "./lost/lost.component";
import { MelodyComponent } from "./melody/melody.component";
import { MuseumComponent } from "./museum/museum.component";
import { PartnersComponent } from "./partners/partners.component";
import { PlazaComponent } from "./plaza/plaza.component";
import { ReferenceComponent } from "./reference/reference.component";
import { SocialsComponent } from "./socials/socials.component";
import { TailorComponent } from "./tailor/tailor.component";
import { TavernComponent } from "./tavern/tavern.component";
import { TempleComponent } from "./temple/temple.component";
import { TrainingHallComponent } from "./training-hall/training-hall.component";

/**
 *
 */
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
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
//skipcq: JS-0327
export class AppModule {
  /**
   *
   * @param {FaIconLibrary} library The class exported from the FontAwesome library.
   */
  constructor(library: FaIconLibrary) {
    library.addIcons(...socials.map((social) => social.icon));
  }
}
