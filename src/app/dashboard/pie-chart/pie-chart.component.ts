import { Component, OnInit, NgModule, HostListener, Input } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from '../../api.service';
import { PieChartData } from './pie-chart-data.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() incommingPieChartData: PieChartData;
  // pieChartData: any[];
  public innerWidth : number;
  public view: any[] = [400, window.innerWidth * 0.8];
  public pieValues : Array<object>;
  public piegradient : boolean;
  public pieshowLegend : boolean;
  public showLabels : boolean; 
  public isDoughnut : boolean;
  public legendPosition: string = 'below';
  public colors : Array<string> = ['#808080', '#606060', '#404040'];
  public title: string = "Pie Chart";
  piecolorScheme : object = {
    domain: this.colors
  };
  theme : 'dark' | 'light' = 'dark';
  
  constructor(private apiService: ApiService) {
    apiService.getTheme().subscribe((theme) => {
      console.log(`theme: `, theme);
      if (theme === 'dark' || theme ==='light') {
        this.theme = theme;
      }
    })
  }

  ngOnInit(): void {
  this.pieValues = this.incommingPieChartData.pieValues;
  this.piegradient = this.incommingPieChartData.piegradient;
  this.pieshowLegend = this.incommingPieChartData.pieshowLegend
  this.showLabels = this.incommingPieChartData.showLabels;
  this.isDoughnut = this.incommingPieChartData.isDoughnut;
  this.legendPosition = this.incommingPieChartData.legendPosition;
  this.colors = this.incommingPieChartData.colors;
  this.title = this.incommingPieChartData.title;
  this.piecolorScheme = {
    domain: this.colors
  };

    this.onResize({})
  }

   // Window width listener
  @HostListener('window:resize', ['$event'])
  onResize(event : any) : void {
  this.innerWidth = window.innerWidth;
    this.innerWidth > 768 ? this.view = [this.innerWidth * 0.4, 400] : this.view = [this.innerWidth * 0.8, 400]
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
