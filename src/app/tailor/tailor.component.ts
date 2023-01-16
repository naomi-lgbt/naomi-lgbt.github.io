import { Component, OnInit } from '@angular/core';
import { Outfits } from 'src/app/_data/outfits';
import { Outfit } from 'src/interfaces/Outfit';

@Component({
  selector: 'app-tailor',
  templateUrl: './tailor.component.html',
  styleUrls: ['./tailor.component.css'],
})
export class TailorComponent implements OnInit {
  public outfits: Outfit[] = [];
  public defaultCredits = [
    ['Model Design', 'https://naomi.lgbt'],
    ['Hair', 'https://booth.pm/en/items/4172285'],
    ['Makeup', 'https://twitter.com/greydenna'],
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
  public credits: [string, string][] = [
    [
      'Something went wrong! Raise an issue?',
      'https://github.com/naomi-lgbt/naomi-lgbt.github.io/issues',
    ],
  ];
  public showCreditModal = false;
  public currentOutfitIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.outfits = Outfits;
  }

  renderCredits(outfit: string) {
    const creditData =
      outfit === '_default'
        ? this.defaultCredits
        : Object.entries(
            this.outfits.find((o) => o.name === outfit)?.credits || {}
          );
    if (!creditData.length) {
      this.credits = [
        [
          "We're sorry, but we're still hard at work tracking down the credits for this. Make a PR?",
          'https://github.com/naomi-lgbt/naomi-lgbt.github.io/pulls',
        ],
      ];
    } else {
      this.credits = creditData.map((el) => [el[0], el[1]]);
    }
    this.showCreditModal = true;
  }

  closeModal() {
    this.showCreditModal = false;
  }

  nextOutfit() {
    this.currentOutfitIndex =
      this.currentOutfitIndex === this.outfits.length - 1
        ? 0
        : this.currentOutfitIndex + 1;
  }

  previousOutfit() {
    this.currentOutfitIndex =
      this.currentOutfitIndex === 0
        ? this.outfits.length - 1
        : this.currentOutfitIndex - 1;
  }

  selectOutfit(index: string) {
    this.currentOutfitIndex = parseInt(index);
  }
}
