import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from '../../modules/global-data';
import { DateWiseData } from '../../modules/date-wise-data';
import { DataServiceService } from '../../services/data-service.service';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:GlobalDataSummary[];
  countries:string[]=[];
  totalActive=0;
  totalConfirmed=0;
  totalDeaths=0;
  totalRecovered=0;
  dateWiseData;
  loading=true;
  datatable=[];
  selectedCountryData:DateWiseData[];
  chart={
    LineChart:'LineChart',
    height:500,
    options:{
      animation:{
        duration:1000,
        easing:'out'
      }
    }
  }

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
    merge(
      this.service.getDateWiseData().pipe(map(res=>{
        this.dateWiseData=res;
      })
      ),
      this.service.getGlobalData().pipe(map(res=>{
        this.data=res;
        this.data.forEach(cs=>{
          this.countries.push(cs.country);
        })
      }))
    ).subscribe({
      complete:()=>{
        this.updateValues('India')
        this.loading=false;
      }
    })
  }

  updateChart(){
    this.datatable=[];
    //datatable.push(['Date','Cases'])
    this.selectedCountryData.forEach(cs=>{
      this.datatable.push([cs.date,cs.cases]);
    })
  }
  updateValues(country:string){
    this.data.forEach(cs=>{
      if(cs.country==country){
        this.totalActive=cs.active;
        this.totalConfirmed=cs.confirmed;
        this.totalDeaths=cs.deaths;
        this.totalRecovered=cs.recovered;
      }
    })
    this.selectedCountryData=this.dateWiseData[country];
    this.updateChart();
  }

}
