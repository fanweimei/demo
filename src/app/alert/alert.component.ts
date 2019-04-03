import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  leftOption = null;
  centerOption = null;
  rightOption = null;
  constructor() {
    this.setLeftOption();
    this.setCenterOption();
    this.setRightOption();
  }

  ngOnInit() {
  }

  setLeftOption() {
    this.leftOption = {
      title: {
        text: '当天产生的告警事件趋势统计'
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return '告警数  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [

        {
          name: '2016 降水量',
          type: 'line',
          smooth: true,
          data: [4, 6, 11, 18, 48, 69, 231, 46, 55, 18, 10, 8, 1]
        }
      ]
    };
  }

  setCenterOption() {
    this.centerOption = {
      // backgroundColor: 'rgba(0,0,0,0.2)',
      title: {
        text: '所有告警事件类别占比'
      },

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '告警事件类别',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '入侵' },
            { value: 310, name: '异常流浪' },
            { value: 274, name: '僵木蠕' },
            { value: 235, name: '系统漏洞' },
            { value: 400, name: '防火墙关闭' }
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(0, 0, 0, 0.9)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.9)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
            //  shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
  }

  setRightOption() {
    this.rightOption = {
      title: {
        text: '所有产生的告警事件中Top6'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['API攻击', '潜伏者', '员工离职', '交易欺诈', '串谋', '外部人员']
      },
      series: [
        {
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230],
          itemStyle: {
            normal: {
              color: function (d) { return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16); }
            }
          },
        }
      ]
    };
  }

}
