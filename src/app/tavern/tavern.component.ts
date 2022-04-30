import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css'],
})
export class TavernComponent implements OnInit {
  public view = 'intro';

  constructor() {}

  ngOnInit(): void {}

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
