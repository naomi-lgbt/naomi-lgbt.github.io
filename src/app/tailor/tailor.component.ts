import { Component } from "@angular/core";

import { Outfit } from "../../interfaces/Outfit";
import { AssetsService } from "../assets.service";

/**
 *
 */
@Component({
  selector: "app-tailor",
  templateUrl: "./tailor.component.html",
  styleUrls: ["./tailor.component.css"]
})
export class TailorComponent {
  public outfits: Outfit[] = [];
  public defaultCredits = [
    ["Model Design", "https://naomi.lgbt"],
    ["Hair", "https://booth.pm/en/items/4172285"],
    ["Makeup", "https://twitter.com/greydenna"],
    ["Lips", "https://booth.pm/en/items/3112652"],
    ["Skin", "https://booth.pm/en/items/4148591"],
    ["Eyes", "https://booth.pm/en/items/4108260"],
    ["Fingernails", "https://booth.pm/en/items/4159491"],
    ["Piercing", "https://booth.pm/en/items/2799690"],
    ["Undergarments", "https://booth.pm/en/items/2706740"],
    ["Stomach Tattoo", "https://booth.pm/en/items/3121414"],
    ["Chest Tattoos", "https://booth.pm/en/items/1277812"],
    ["Arm Tattoos", "https://booth.pm/en/items/4240938"],
    ["Back Tattoo", "https://booth.pm/en/items/3298203"],
    ["Ankle Tattoos", "https://booth.pm/en/items/3297809"]
  ];
  public credits: [string, string][] = [
    [
      "Something went wrong! Raise an issue?",
      "https://github.com/naomi-lgbt/naomi-lgbt.github.io/issues"
    ]
  ];
  public showCreditModal = false;
  public currentOutfitIndex = 0;

  /**
   *
   * @param {AssetsService} assetService The instance of the Asset service.
   */
  constructor(private assetService: AssetsService) {
    assetService.fetchOutfits().subscribe((outfits) => {
      this.outfits = outfits.sort((a, b) => a.name.localeCompare(b.name));
      this.currentOutfitIndex = Math.floor(Math.random() * outfits.length);
    });
  }

  /**
   *
   * @param {string} outfit The name of the outfit to get credits for.
   */
  renderCredits(outfit: string) {
    const creditData =
      outfit === "_default"
        ? this.defaultCredits
        : Object.entries(
            this.outfits.find((o) => o.name === outfit)?.credits || {}
          );
    if (!creditData.length) {
      this.credits = [
        [
          "We're sorry, but we're still hard at work tracking down the credits for this. Make a PR?",
          "https://github.com/naomi-lgbt/naomi-lgbt.github.io/pulls"
        ]
      ];
    } else {
      this.credits = creditData.map((el) => [el[0], el[1]]);
    }
    this.showCreditModal = true;
  }

  /**
   *
   */
  closeModal() {
    this.showCreditModal = false;
  }

  /**
   *
   */
  nextOutfit() {
    this.currentOutfitIndex =
      this.currentOutfitIndex === this.outfits.length - 1
        ? 0
        : this.currentOutfitIndex + 1;
  }

  /**
   *
   */
  previousOutfit() {
    this.currentOutfitIndex =
      this.currentOutfitIndex === 0
        ? this.outfits.length - 1
        : this.currentOutfitIndex - 1;
  }

  /**
   *
   * @param {string} index The index of the select menu.
   */
  selectOutfit(index: string) {
    this.currentOutfitIndex = parseInt(index);
  }

  /**
   *
   */
  randomOutfit() {
    this.currentOutfitIndex = Math.floor(Math.random() * this.outfits.length);
  }
}
