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
  showLibPanel = false;
  range = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  extras = [];

  ngAfterViewInit() {
    this.range = document.querySelector('.dashboard-content').getBoundingClientRect();
    console.log(this.range);
  }

  addChart() {
    this.showLibPanel = !this.showLibPanel;
  }

  onDragChart(e, id) {
    if (e.x >= this.range.left && e.y <= this.range.right && e.y >= this.range.top && e.y <= this.range.bottom) {
      switch (id) {
        case 0:
          this.extras.push({
            type: 0,
            x: e.x,
            y: e.y,
            height: 480,
            width: 400
          });
          break;
        case 1:
          this.extras.push({
            type: 1,
            x: e.x,
            y: e.y,
            height: 230,
            width: 400
          });
          break;
        case 2:
          this.extras.push({
            type: 2,
            x: e.x,
            y: e.y,
            height: 500,
            width: 700
          });
          break;
        case 3:
          this.extras.push({
            type: 3,
            x: e.x,
            y: e.y,
            height: 500,
            width: 600
          });
          break;
        case 4:
          this.extras.push({
            type: 4,
            x: e.x,
            y: e.y,
            height: 500,
            width: 400
          });
          break;
      }
    }
  }
}
