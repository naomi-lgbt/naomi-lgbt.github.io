import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './arena/arena.component';
import { CastleComponent } from './castle/castle.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { LostComponent } from './lost/lost.component';
import { MuseumComponent } from './museum/museum.component';
import { PlazaComponent } from './plaza/plaza.component';
import { TavernComponent } from './tavern/tavern.component';
import { TempleComponent } from './temple/temple.component';
import { TrainingHallComponent } from './training-hall/training-hall.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'plaza', component: PlazaComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'arena', component: ArenaComponent },
  { path: 'tavern', component: TavernComponent },
  { path: 'museum', component: MuseumComponent },
  { path: 'training-hall', component: TrainingHallComponent },
  { path: 'temple', component: TempleComponent },
  { path: 'castle', component: CastleComponent },
  { path: 'confirm', component: ConfirmComponent },
  // wildcard route for 404 - ALL routes go above this :)
  { path: '**', component: LostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
