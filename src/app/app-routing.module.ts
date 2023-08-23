import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { LostComponent } from './lost/lost.component';
import { MuseumComponent } from './museum/museum.component';
import { PlazaComponent } from './plaza/plaza.component';
import { ReferenceComponent } from './reference/reference.component';
import { SocialsComponent } from './socials/socials.component';
import { TailorComponent } from './tailor/tailor.component';
import { TavernComponent } from './tavern/tavern.component';
import { TempleComponent } from './temple/temple.component';
import { TrainingHallComponent } from './training-hall/training-hall.component';
import { MelodyComponent } from './melody/melody.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'plaza', component: PlazaComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'tavern', component: TavernComponent },
  { path: 'museum', component: MuseumComponent },
  { path: 'training-hall', component: TrainingHallComponent },
  { path: 'temple', component: TempleComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'tailor', component: TailorComponent },
  { path: 'ref', component: ReferenceComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'melody', component: MelodyComponent },
  // wildcard route for 404 - ALL routes go above this :)
  { path: '**', component: LostComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
