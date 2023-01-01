import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  public view = '';

  constructor() {}

  ngOnInit(): void {}

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
