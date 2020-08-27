import { Component, OnInit } from '@angular/core';
import { StateDataSummary } from '../../modules/state-data';
import { IndiaDataService } from '../../services/india-data.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  data:StateDataSummary[];
  states:string[]=[];
  totalActive=0;
  totalConfirmed=0;
  totalDeaths=0;
  totalRecovered=0;
  loading=true;
  datatable=[];
  chart={
    PieChart:'PieChart',
    ColumnChart:'ColumnChart',
    height:500,
    options: {
      animation:{
        duration:1000,
        easing:'out'
      }
    }
  }

  constructor(private indiaDataService:IndiaDataService) { }

  ngOnInit(): void {
    this.indiaDataService.getIndiaData().subscribe(
      {
        next:(data)=>{
          this.data=data;
          this.data.forEach(cs=>{
            this.states.push(cs.state);
          })
          this.initChart('c');
        },
        complete:()=>{
          this.updateValues('Maharashtra')
          this.loading=false;
        }
    })
  }

  updateValues(state:String){
    this.data.forEach(cs=>{
      if(state==cs.state){
        this.totalActive=cs.active;
        this.totalConfirmed=cs.confirmed;
        this.totalDeaths=cs.deaths;
        this.totalRecovered=cs.recovered;
      }
    })
  }

  initChart(caseType:string){
    this.datatable=[];
    this.data.forEach(cs=>{
      let value:number;
      if(caseType=='c'){
        if(+cs.confirmed>500){
          value=+cs.confirmed;
        }
      }
      if(caseType=='a'){
        if(+cs.active>500){
          value=+cs.active;
        }
      }
      if(caseType=='d'){
        if(+cs.deaths>100){
          value=+cs.deaths;
        }
      }
      if(caseType=='r'){
        if(+cs.recovered>500){
          value=+cs.recovered;
        }
      }
      this.datatable.push([
        cs.state,
        value
      ])
    })
  }

  updateChart(input:HTMLInputElement){
    this.initChart(input.value);
  }

}
