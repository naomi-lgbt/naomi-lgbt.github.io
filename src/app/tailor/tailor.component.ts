import { Component, OnInit } from '@angular/core';
import { Outfits } from 'src/assets/data/outfits';
import { Outfit } from 'src/interfaces/Outfit';

@Component({
  selector: 'app-tailor',
  templateUrl: './tailor.component.html',
  styleUrls: ['./tailor.component.css'],
})
export class TailorComponent implements OnInit {
  public outfits: Outfit[] = [];

  constructor() {}

  ngOnInit(): void {
    this.outfits = Outfits;
  }
}
