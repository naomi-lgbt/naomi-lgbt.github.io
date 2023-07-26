import { Component } from '@angular/core';

type Councillor = {
  username: string;
  avatar: string;
};

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrls: ['./council.component.css'],
})
export class CouncilComponent {
  public councillors = [];
}
