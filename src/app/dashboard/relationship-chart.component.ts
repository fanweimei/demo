import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'relationship-chart',
    template: `
        <panel [width]="width" [height]="height" [x]="x" [y]="y" pTitle="可疑网站相关性">
            <div echarts [options]="option" class="chart" [loading]="loading"></div>
        </panel>
    `,
    styles: [`
        .chart {
            height: 100%;
        }
    `]
})
export class RelationshipChartComponent implements OnInit, AfterViewInit {
    @Input() x;
    @Input() y;
    @Input() width;
    @Input() height;
    option = {};
    loading = true;

    constructor(private http: HttpClient) {
        this.http.get("/assets/relation.json")
            .subscribe(data => {
                this.setOption(data);
            });
    }

    ngOnInit() {

    }
    ngAfterViewInit() {

    }

    setOption(json) {
        this.loading = false;
        this.option = {
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    // progressiveThreshold: 700,
                    data: json.nodes.map(function (node) {
                        return {
                            x: node.x,
                            y: node.y,
                            id: node.id,
                            name: node.label,
                            symbolSize: node.size,
                            itemStyle: {
                                normal: {
                                    color: node.color
                                }
                            }
                        };
                    }),
                    edges: json.edges.map(function (edge) {
                        return {
                            source: edge.sourceID,
                            target: edge.targetID
                        };
                    }),
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    roam: true,
                    focusNodeAdjacency: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.3,
                            opacity: 0.7
                        }
                    }
                }
            ]
        };
    }

}