import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { DensityChartOneComponent } from './components/density-chart-one/density-chart-one.component';
import { DensityChartTwoComponent } from './components/density-chart-two/density-chart-two.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SocialMediaInfoComponent } from './components/social-media-info/social-media-info.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    DonutChartComponent,
    DensityChartOneComponent,
    DensityChartTwoComponent,
    InfoCardComponent,
    SocialMediaInfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
