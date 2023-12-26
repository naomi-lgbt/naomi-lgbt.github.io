import { Component } from "@angular/core";

/**
 *
 */
@Component({
  selector: "app-tavern",
  templateUrl: "./tavern.component.html"
})
export class TavernComponent {
  public view = "intro";

  /**
   *
   * @param {string} name The name of the view to switch to.
   */
  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
