import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
  private userGroupList;
  fullImagePath: string;

  constructor(private apiService: ApiService) {

    this.fullImagePath = './assets/icon-tick.svg'}

  ngOnInit() {
    this.getUserGroups();
  }

  public getUserGroups() {
    this.apiService.getClaimData().subscribe(res => {
      this.userGroupList = res;
      console.log('res', res);
    });
  }
}
