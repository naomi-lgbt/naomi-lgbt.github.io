import { Component, OnInit } from '@angular/core';
import { hallOfFame } from 'src/assets/data/hallOfFame';
import { Fight } from 'src/interfaces/Fight';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
})
export class ArenaComponent implements OnInit {
  public view = 'intro';
  public fights: Fight[] = [];
  public activities: { title: string; description: string; date: string }[] =
    [];

  constructor(private service: ActivityService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.activities = data.map(({ title, description, timestamp }) => ({
        title,
        description,
        date: new Date(timestamp).toLocaleString(),
      }));
    });
  }

  changeView(name: string) {
    this.view = name;
    this.fights = hallOfFame;
  }

  bustCache() {
    this.service.clearCache();
    this.service.getData().subscribe((data) => {
      this.activities = data.map(({ title, description, timestamp }) => ({
        title,
        description,
        date: new Date(timestamp).toLocaleString(),
      }));
    });
  }
}
