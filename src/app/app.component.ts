import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'demo';
  time = Date.now();
  routeName = location.pathname.slice(1);

  ngOnInit(): void {
    const minute = 1000 * 60;
    setInterval(() => {
      this.time = Date.now();
    }, minute);
  }
}
