import { Component, OnInit } from '@angular/core';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';
import { DistrictDataSummary } from '../../modules/district-data';

@Component({
  selector: 'app-tamilnadu',
  templateUrl: './tamilnadu.component.html',
  styleUrls: ['./tamilnadu.component.css']
})
export class TamilnaduComponent implements OnInit {

  data:DistrictDataSummary[];
  districts:string[]=[];
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

  constructor(private _service:TamilnaduDataService) { }

  ngOnInit(): void {
    this._service.getDistricts().subscribe(
      {
        next:(data)=>{
          this.data=data;
          this.data.forEach(cs=>{
            this.districts.push(cs.district);
          })
          this.initChart('c');
        },
        complete:()=>{
          this.updateValues('Chennai');
          this.loading=false;
        }
    })
  }

  updateValues(district:String){
    this.data.forEach(cs=>{
      if(district==cs.district){
        this.totalActive=cs.active;
        this.totalConfirmed=cs.confirmed;
        this.totalDeaths=cs.death;
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
        if(+cs.death>100){
          value=+cs.death;
        }
      }
      if(caseType=='r'){
        if(+cs.recovered>500){
          value=+cs.recovered;
        }
      }
      this.datatable.push([
        cs.district,
        value
      ])
    })
  }

  updateChart(input:HTMLInputElement){
    this.initChart(input.value);
  }
}
