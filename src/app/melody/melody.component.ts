import { Component } from "@angular/core";

import { Pose } from "../../interfaces/Pose";
import { AssetsService } from "../assets.service";

/**
 *
 */
@Component({
  selector: "app-melody",
  templateUrl: "./melody.component.html",
  styleUrls: ["./melody.component.css"]
})
export class MelodyComponent {
  public poses: Pose[] = [];
  public currentPoseIndex = 0;

  /**
   *
   * @param {AssetsService} assetService The instance of the Asset Service.
   */
  constructor(private assetService: AssetsService) {
    this.assetService.fetchMelody().subscribe((poses) => {
      this.poses = poses.sort((a, b) => a.name.localeCompare(b.name));
      this.currentPoseIndex = Math.floor(Math.random() * poses.length);
    });
  }

  /**
   *
   */
  nextPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === this.poses.length - 1
        ? 0
        : this.currentPoseIndex + 1;
  }

  /**
   *
   */
  previousPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === 0
        ? this.poses.length - 1
        : this.currentPoseIndex - 1;
  }

  /**
   *
   * @param {string} index The index from the select menu.
   */
  selectPose(index: string) {
    this.currentPoseIndex = parseInt(index);
  }

  /**
   *
   */
  randomPose() {
    this.currentPoseIndex = Math.floor(Math.random() * this.poses.length);
  }
}
