import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'muma-chart',
    template: `
        <panel [width]="width" [height]="height" [x]="x" [y]="y" pTitle="2018年挂马攻击地域分布Top10">
            <div echarts [options]="option" class="chart" [loading]="loading"></div>
        </panel>
    `,
    styles: [`
        .chart {
            height: 100%;
        }
    `]
})
export class MumaChartComponent implements OnInit, AfterViewInit {
    @Input() x;
    @Input() y;
    @Input() width;
    @Input() height;
    option = {};
    loading = true;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.setOption();
    }
    ngAfterViewInit() {

    }

    setOption() {
        this.loading = false;
        this.option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '2%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['北京', '浙江', '江苏', '山东', '湖北', '福建', '内蒙古', '云南', '上海', '广东'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    nameTextStyle: {
                        fontSize: 10
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                    },
                }
            ],
            series: [
                {
                    name: '外次',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function (d) { return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16); }
                        }
                    },
                    data: [30, 22, 14, 11, 8, 6, 5, 4, 2, 1],
                }
            ]
        };
    }

}