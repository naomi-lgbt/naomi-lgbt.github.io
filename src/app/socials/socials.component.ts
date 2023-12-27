import { Component, OnInit } from "@angular/core";

import { socials } from "../../data/socials";
import { Social } from "../../interfaces/Social";

/**
 *
 */
@Component({
  selector: "app-socials",
  templateUrl: "./socials.component.html",
  styleUrls: ["./socials.component.css"]
})
export class SocialsComponent implements OnInit {
  public data: Social[] = [];

  /**
   *
   */
  ngOnInit(): void {
    this.data = socials;
  }
}
