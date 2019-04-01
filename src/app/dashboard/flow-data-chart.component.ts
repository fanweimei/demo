import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'flow-data-chart',
    template: `
        <panel [width]="width" [height]="height" [x]="x" [y]="y" pTitle="数据流趋势分布">
            <div echarts [options]="option" class="chart" [loading]="loading"></div>
        </panel>
    `,
    styles: [`
        .chart {
            height: 100%;
        }
    `]
})
export class FlowdataChartComponent implements OnInit, AfterViewInit {
    @Input() x;
    @Input() y;
    @Input() width;
    @Input() height;
    option = {};
    loading = true;

    constructor(private http: HttpClient) {
        this.http.get("/assets/aqi-beijing.json")
            .subscribe(data => {
                this.setOption(data);
            });
    }

    ngOnInit() {

    }
    ngAfterViewInit() {

    }

    setOption(data) {
        this.loading = false;
        this.option = {
            title: {
                text: '数据流'
            },
            grid: {
                left: '5%',
                right: '15%'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },

            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#096'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: 'Beijing AQI',
                type: 'line',
                data: data.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 50
                    }, {
                        yAxis: 100
                    }, {
                        yAxis: 150
                    }, {
                        yAxis: 200
                    }, {
                        yAxis: 300
                    }]
                }
            }
        };
    }

}