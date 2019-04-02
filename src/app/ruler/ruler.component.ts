import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.less']
})
export class RulerComponent implements OnInit {
  group = [
    {
      title: 'Anomaly',
      count: 6
    },
    {
      title: 'Asset Reconciliation Exclusion',
      count: 12
    },
    {
      title: 'Authentication',
      count: 13
    },
    {
      title: 'Botnet',
      count: 7
    },
    {
      title: 'Category Definitions',
      count: 0
    },
    {
      title: 'Compliance',
      count: 27
    },
    {
      title: 'DDos',
      count: 8
    },
    {
      title: 'Database',
      count: 0
    },
    {
      title: 'Exfilteration',
      count: 3
    },
    {
      title: 'Explot',
      count: 3
    },
    {
      title: 'False Positive',
      count: 1
    },
    {
      title: 'Flowshape',
      count: 0
    },
    {
      title: 'Horizontal Movement',
      count: 2
    },
    {
      title: 'Host Definitions',
      count: 0
    },
    {
      title: 'Intrusion Detection',
      count: 15
    }
  ];

  data = [
    {
      name: 'All Exploits Become Offense',
      offense: '是',
      dispatched: '否',
      status: '不可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Attack followed by Attack Response',
      offense: '是',
      dispatched: '是',
      status: '不可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Chained Exploit Followed By Suspicious Events',
      offense: '是',
      dispatched: '是',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Database Failures Followed By User Changes',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Database Multiple Database Failures Followed By Sucess',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Destination Vulnerable to Detected Exploit',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Destination Vulnerable to Detected Exploit on a Diffent Port',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Destination Vulnerable to Different Exploit than Attemplted on Target Port',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Exploits Events with High Magnitude Become Offenses',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Login Failures Followed By Sucess from the same Source IP',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Login Failures Followed By Success to the same User',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Multiple Exploit Types Against Single Destination',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    },
    {
      name: 'Recon Followed by Accept',
      offense: '是',
      dispatched: '否',
      status: '可用',
      properties: '无',
      create: '2016-03-27',
      modify: '2018-04-12',
      author: 'admin',
      note: '无'
    }
  ];

  showDetailPanel = false;
  constructor() { }

  ngOnInit() {
  }

  showDetail() {
    this.showDetailPanel = !this.showDetailPanel;
  }

}
