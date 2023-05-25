import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  countdown: number = 10;
  intervalId: number;

  constructor() { }

  ngOnInit(): void {

  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
  resetCountdown(){
    this.countdown = 10;
    this.stopCountdown();
  }
  stopCountdown() {
    clearInterval(this.intervalId);
  }

}
