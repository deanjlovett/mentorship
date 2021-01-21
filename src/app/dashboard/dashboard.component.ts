import { Component, OnInit, NgModule } from '@angular/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from '../api.service';
import { BarChartData } from  './bar-chart/bar-chart-data.model'
import { PieChartData } from  './pie-chart/pie-chart-data.model'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  allUserData: any[];
  constructor(private apiService: ApiService) {
  }

mentorBarChartData: BarChartData = {
  barValues: [
    {
      "name": "Meetings Done",
      "value": 80
    },
    {
      "name": "Satisfaction",
      "value": 60
    },
  ],
  showXAxisLabel: false,
  xAxisLabel: '',
  showYAxisLabel: true,
  yAxisLabel: 'Percentage',
  colors: ['#264653', '#2A9D8F'],
  title: "Mentors"
};

menteeBarChartData: BarChartData = {
  barValues: [
    {
      "name": "Meetings Done",
      "value": 40
    },
    {
      "name": "Satisfaction",
      "value": 90
    },
  ],
  showXAxisLabel: false,
  xAxisLabel: '',
  showYAxisLabel: true,
  yAxisLabel: 'Percentage',
  colors: ['#F4A261', '#E76F51'],
  title: "Mentees"
};

mentorPieChartData: PieChartData = {
  pieValues: [
    {
      "name": "Not Started",
      "value": 2
    },
    {
      "name": "In Progess",
      "value": 3
    },
    {
      "name": "Completed",
      "value": 4
    },
  ],
  piegradient: false,
  pieshowLegend: true ,
  showLabels: true, 
  isDoughnut: true,
  legendPosition: 'below',
  colors: ['#264653', '#2A9D8F', '#E9C46A'],
  title: "Mentors"
}

menteePieChartData: PieChartData = {
  pieValues: [
    {
      "name": "Not Started",
      "value": 3
    },
    {
      "name": "In Progess",
      "value": 9
    },
    {
      "name": "Completed",
      "value": 4
    },
  ],
  piegradient: false,
  pieshowLegend: true ,
  showLabels: true, 
  isDoughnut: true,
  legendPosition: 'below',
  colors: ['#E9C46A', '#F4A261', '#E76F51'],
  title: "Mentees"
}

  ngOnInit(): void {
    let userDataRequest = async () => {
      let dashboardResponse = await this.apiService.retrieveUserData();
      let allUserData = await dashboardResponse;
      // console.log(`DashboardComponent Resposne: ${JSON.stringify(allUserData)}`);
    }
    userDataRequest();
  }
}
