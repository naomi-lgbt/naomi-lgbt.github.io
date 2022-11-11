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
  public defaultCredits = [
    ['Model Design', 'Me~!'],
    ['Hair', 'https://booth.pm/en/items/4172285'],
    ['Makeup', 'My wonderful sister~!'],
    ['Lips', 'https://booth.pm/en/items/3112652'],
    ['Skin', 'https://booth.pm/en/items/4148591'],
    ['Eyes', 'https://booth.pm/en/items/4108260'],
    ['Fingernails', 'https://booth.pm/en/items/4159491'],
    ['Piercing', 'https://booth.pm/en/items/2799690'],
    ['Undergarments', 'https://booth.pm/en/items/2706740'],
    ['Stomach Tattoo', 'https://booth.pm/en/items/3121414'],
    ['Chest Tattoos', 'https://booth.pm/en/items/1277812'],
    ['Arm Tattoos', 'https://booth.pm/en/items/4240938'],
    ['Back Tattoo', 'https://booth.pm/en/items/3298203'],
    ['Ankle Tattoos', 'https://booth.pm/en/items/3297809'],
  ];

  constructor() {}

  ngOnInit(): void {
    this.outfits = Outfits;
  }
}
