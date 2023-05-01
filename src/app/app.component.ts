import { Component } from '@angular/core';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { ParticleOptions } from 'src/config/ParticleOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'profile';

  id = 'tsparticles';

  particlesOptions = ParticleOptions;

  // skipcq: JS-0105
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
