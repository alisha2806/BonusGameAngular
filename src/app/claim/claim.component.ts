import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClaimComponent implements OnInit {
  timeLeft: number = 25;
  interval;

  private userGroupList;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getUserGroups();
    this.startTimer();
  }

  public getUserGroups() {
    this.apiService.getClaimData().subscribe(res => {
      this.userGroupList = res;
      console.log('res', res);
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 25;
      }
    }, 1000)
  }

  claimButton() {
    this.router.navigate(['/prize']);
  }

}
