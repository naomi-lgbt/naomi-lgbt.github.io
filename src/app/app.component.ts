import { Component } from "@angular/core";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

import { ParticleOptions } from "../config/ParticleOptions";

/**
 *
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "profile";

  id = "tsparticles";

  particlesOptions = ParticleOptions;

  // skipcq: JS-0105
  /**
   *
   * @param {Engine} engine The TSParticles engine.
   */
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
