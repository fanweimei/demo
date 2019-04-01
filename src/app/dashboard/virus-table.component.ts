import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'virus-table',
    template: `
        <panel [height]="height" pTitle="2018年1至9月病毒Top10">
            <div>
                <nz-table #tb [nzData]="data" [nzSize]="'small'" [nzShowPagination]="false">
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let data of tb.data">
                            <td><a href="#">{{data.name}}</a></td>
                            <td>{{data.count}}</td>
                        </tr>
                    </tbody>
                </nz-table>
            </div>
        </panel>
    `,
    styles: [`

    `]
})
export class VirusTableComponent {
    @Input() x;
    @Input() width;
    @Input() y;
    @Input() height;
    data = [
        {
            name: 'Trojan.Vools!8.F279',
            count: 88999
        },
        {
            name: 'Backdoor.Agen!8.C5D',
            count: 78800
        },
        {
            name: 'Trojan.TaojinStar!8.B81',
            count: 69990
        },
        {
            name: 'Trojan.Win3264.XMR-Miner!1.ADCC',
            count: 50001
        },
        {
            name: 'Trojan.ShadowBrokers!8.B975',
            count: 30200
        },
        {
            name: 'Trojan.Agent!8B1E',
            count: 12009
        },
        {
            name: 'Trojan.ConMiner!8.30A',
            count: 9889
        },
        {
            name: 'Trojan.Reconyc!8.153',
            count: 1123
        },
        {
            name: 'Downloader.Chindo!8.436',
            count: 999
        },
        {
            name: 'Dropper.Generic!8.34E',
            count: 120
        },
    ];
}