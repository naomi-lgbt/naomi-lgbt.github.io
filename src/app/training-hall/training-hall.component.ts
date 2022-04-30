import { Component, OnInit } from '@angular/core';
import { adventures } from 'src/assets/data/adventures';
import { Adventure } from 'src/interfaces/Adventure';

@Component({
  selector: 'app-training-hall',
  templateUrl: './training-hall.component.html',
  styleUrls: ['./training-hall.component.css'],
})
export class TrainingHallComponent implements OnInit {
  public view = 'intro';
  public games: Adventure[] = [];

  constructor() {}

  ngOnInit(): void {
    this.games = adventures;
  }

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
