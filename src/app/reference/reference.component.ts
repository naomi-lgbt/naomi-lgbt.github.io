import { Component } from '@angular/core';
import { tattoos } from 'src/data/tattoos';
import { reference } from '../_data/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent {
  public view = '';
  public tattooData = tattoos;
  public refData = reference;
  public currentTattooIndex = 0;

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
