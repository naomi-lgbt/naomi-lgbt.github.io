import { Component } from '@angular/core';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { ParticleOptions } from 'src/app/_config/ParticleOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'profile';

  id = 'tsparticles';

  particlesOptions = ParticleOptions;

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
