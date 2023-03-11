import { Component, OnInit } from '@angular/core';
import { Social } from 'src/interfaces/Social';
import { socials } from '../_data/socials';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
  public data: Social[] = [];

  ngOnInit(): void {
    this.data = socials;
  }
}
