import { Component, OnInit, AfterViewInit } from '@angular/core';
import Draggabilly from 'draggabilly';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements AfterViewInit {
  source = '风险管理';
  isAutoRefresh = false;
  refreshTimer = null;
  refreshTime = 60;
  chartOption = {};
  loading = true;
  pos = [];
  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    const GetPos = () => {
      const ele = document.body;
      if (!ele) {
        requestAnimationFrame(GetPos);
        return;
      }
      setTimeout(() => {
        const gap = 10;
        const boundaryGap = 15;
        const total = (ele.clientWidth - boundaryGap * 2 - gap * 10);
        console.log(ele.clientWidth, ele.getBoundingClientRect())
        this.pos.push({
          x: boundaryGap,
          y: 0,
          width: total * 0.3,
        });
        this.pos.push({
          x: this.pos[0].x + this.pos[0].width + gap,
          y: 0,
          width: total * 0.4
        });
        this.pos.push({
          x: this.pos[1].x + this.pos[1].width + gap,
          y: 0,
          width: total * 0.3,
        });
      }, 10000);
    };
    requestAnimationFrame(GetPos);
  }

  startRefreshTimer() {
    this.isAutoRefresh = !this.isAutoRefresh;
    clearInterval(this.refreshTimer);
    if (this.isAutoRefresh) {
      this.refreshTime = 60;
      this.refreshTimer = setInterval(() => {
        this.refreshTime--;
        if (this.refreshTime < 0) {
          this.refreshTime = 60;
        }
      }, 1000);
    }
  }
}
