import { Component } from "@angular/core";
import { ParticleOptions } from "src/config/ParticleOptions";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

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
   * @param engine
   */
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
