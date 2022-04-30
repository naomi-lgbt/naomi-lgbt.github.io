import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './arena/arena.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { PlazaComponent } from './plaza/plaza.component';
import { TavernComponent } from './tavern/tavern.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'plaza', component: PlazaComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'arena', component: ArenaComponent },
  { path: 'tavern', component: TavernComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
