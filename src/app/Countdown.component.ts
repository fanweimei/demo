import { Component, OnInit, AfterViewInit } from '@angular/core';
import Draggabilly from 'draggabilly';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'count-down',
    template: `
    <div class="count-down">
        <span>刷新倒计时：</span><span>{{refreshTime}}</span>
        <i style="font-size:18px;" nz-icon [type]="isAutoRefresh?'pause':'caret-right'" theme="outline" nz-tooltip
            nzTitle="启动定时刷新" nzPlacement="bottom" (click)="startRefreshTimer()"></i>
        <i nz-icon type="reload" theme="outline" nz-tooltip nzTitle="手动刷新" nzPlacement="bottom"></i>
    </div>
  `,
    styles: [`
    i {
        cursor: pointer;
        margin-left: 10px;
    }
  `]
})
export class CountdownComponent {
    isAutoRefresh = false;
    refreshTimer = null;
    refreshTime = 60;

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
