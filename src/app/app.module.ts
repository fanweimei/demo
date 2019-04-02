import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import zh from '@angular/common/locales/zh';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { RulerComponent } from './ruler/ruler.component';
import { PanelComponent } from './panel/panel.component';
import { FlowdataChartComponent } from './dashboard/flow-data-chart.component';
import { VirusTableComponent } from './dashboard/virus-table.component';
import { ScansLinkComponent } from './dashboard/scans-link.component';
import { MumaChartComponent } from './dashboard/muma-chart.component';
import { RelationshipChartComponent } from './dashboard/relationship-chart.component';
import { CountdownComponent } from './Countdown.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlertComponent,
    RulerComponent,
    PanelComponent,
    FlowdataChartComponent,
    VirusTableComponent,
    ScansLinkComponent,
    MumaChartComponent,
    RelationshipChartComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
