import { Component } from '@angular/core';
import { Pose } from 'src/interfaces/Pose';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  public poses: Pose[] = [];
  public currentPoseIndex = 0;

  constructor(private assetService: AssetsService) {
    this.assetService.fetchErin().subscribe((poses) => {
      this.poses = poses.sort((a, b) => a.name.localeCompare(b.name));
      this.currentPoseIndex = Math.floor(Math.random() * poses.length);
    });
  }

  nextPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === this.poses.length - 1
        ? 0
        : this.currentPoseIndex + 1;
  }

  previousPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === 0
        ? this.poses.length - 1
        : this.currentPoseIndex - 1;
  }

  selectPose(index: string) {
    this.currentPoseIndex = parseInt(index);
  }

  randomPose() {
    this.currentPoseIndex = Math.floor(Math.random() * this.poses.length);
  }
}
