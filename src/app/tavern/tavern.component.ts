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
   * @param name
   */
  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
