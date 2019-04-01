import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'scans-link',
    template: `
        <panel [width]="width" [height]="height" [x]="x" [y]="y" pTitle="设备扫描情况">
            <div>
                <p>最后更新时间：2019/04/01 12:00:00</p>
                <div>
                    <a href="#">HMS测试扫描 2018/12/12 8:00:00</a>
                    <a href="#">demo测试 2018/12/12 8:00:00</a>
                    <a href="#">window补丁扫描 2018/12/12 8:00:00</a>
                    <a href="#">RC window补丁扫描 2018/12/12 8:00:00</a>
                    <a href="#">打印机扫描 2018/12/12 8:00:00</a>
                </div>
            </div>
        </panel>
    `,
    styles: [`
        p {
            margin-bottom: 10px;
        }
        a {
            display: block;
            margin-bottom: 5px;
            margin-left: 5px;
        }
    `]
})
export class ScansLinkComponent {
    @Input() x;
    @Input() width;
    @Input() y;
    @Input() height;
}