import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './services/registration.service';
import { GlobalDataSummary } from './modules/global-data';
import { DataServiceService } from './services/data-service.service';

@Component({
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {

  totalConfirmed=0;
  totalActive=0;
  totalDeaths=0;
  totalRecovered=0;
  loading=true;
  globalData:GlobalDataSummary[];
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

  constructor(public router:Router,
              public _service:RegistrationService,
              private dataService:DataServiceService){}

  initChart(caseType:string){
    this.datatable=[];
    //this.datatable.push(["Country","Cases"])
    this.globalData.forEach(cs=>{
    let value:number;
    if(caseType=='c'){
      if(cs.confirmed>6000){
      value=cs.confirmed;
      }
    }
    if(caseType=='a'){
      if(cs.active>6000){
        value=cs.active;
        }
      }
      if(caseType=='d'){
        if(cs.deaths>2000){
          value=cs.deaths;
        }
      }
      if(caseType=='r'){
        if(cs.recovered>6000){
          value=cs.recovered;
        }
      }
      this.datatable.push([
        cs.country,
        value
      ])
    })
  }

  ngOnInit(){
    this.dataService.getGlobalData().subscribe(
      {
        next:(result)=>{
          this.globalData=result;
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed)){
              this.totalActive+=cs.active;
              this.totalConfirmed+=cs.confirmed;
              this.totalDeaths+=cs.deaths;
              this.totalRecovered+=cs.recovered;
            }
          })
          this.initChart('c');
        },
        complete:()=>{
          this.loading=false;
        }
      }
    )
  }

  updateChart(input:HTMLInputElement){
    this.initChart(input.value.toString());
  }
}
