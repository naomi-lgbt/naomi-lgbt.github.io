import { Component } from '@angular/core';

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css'],
})
export class TavernComponent {
  public view = 'intro';

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
