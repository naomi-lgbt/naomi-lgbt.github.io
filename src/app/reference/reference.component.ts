import { Component, OnInit } from '@angular/core';
import { tattoos } from 'src/assets/data/tattoos';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  public view = '';
  public tattooData = tattoos;
  public currentTattooIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextTattoo() {
    this.currentTattooIndex =
      this.currentTattooIndex === this.tattooData.length - 1
        ? 0
        : this.currentTattooIndex + 1;
  }

  previousTattoo() {
    this.currentTattooIndex =
      this.currentTattooIndex === 0
        ? this.tattooData.length - 1
        : this.currentTattooIndex - 1;
  }

  selectTattoo(index: string) {
    this.currentTattooIndex = parseInt(index);
  }
}
