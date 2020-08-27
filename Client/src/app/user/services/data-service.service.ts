import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GlobalDataSummary } from '../modules/global-data';
import { DateWiseData } from '../modules/date-wise-data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/";
  private dateWiseDataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

  private extension='.csv';
  month;
  date;
  year;

  getDate(date:number){
    if(date<10){
      return '0'+date;
    }
    return date;
  }
  constructor(private http:HttpClient) {
    var now=new Date();
    now.setDate(now.getDate()-2);
    this.month=now.getMonth()+1;
    this.date=now.getDate();
    this.year=now.getFullYear();
    this.globalDataUrl=`${this.globalDataUrl}${this.getDate(this.month)}-${this.getDate(this.date)}-${this.year}${this.extension}`;
  }

  getDateWiseData(){
    return this.http.get(this.dateWiseDataUrl,{responseType:'text'}).pipe(map(result=>{
      let rows=result.split('\n');
      let mainData={};
      let header=rows[0];
      let dates=header.split(/,(?=\S)/);
      dates.splice(0,4);
      rows.splice(0,1);
      rows.forEach(row=>{
        let cols=row.split(/,(?=\S)/);
        let con=cols[1];
        cols.splice(0,4);
        mainData[con]=[];
        cols.forEach((value,index)=>{
          let dw:DateWiseData={
            cases:+value,
            country:con,
            date:new Date(Date.parse(dates[index]))
          }
          mainData[con].push(dw);
        })
      })
      return mainData;
    }))
  }

  getGlobalData(){
    return this.http.get(this.globalDataUrl,{responseType:'text'}).pipe(map(result=>{
      let data:GlobalDataSummary[]=[];
      let raw={};
      let rows=result.split('\n');
      rows.splice(0,1);
      rows.forEach(row=>{
        let cols=row.split(/,(?=\S)/);
        let cs={
          country:cols[3],
          confirmed:+cols[7],
          deaths:+cols[8],
          recovered:+cols[9],
          active:+cols[10]
        };
        let temp:GlobalDataSummary=raw[cs.country];
        if(temp){
          temp.active=cs.active+temp.active;
          temp.confirmed=cs.confirmed+temp.confirmed;
          temp.deaths=cs.deaths+temp.deaths;
          temp.recovered=cs.recovered+temp.recovered;
          raw[cs.country]=temp;
        }
        else{
          raw[cs.country]=cs;
        }
      })
      return <GlobalDataSummary[]>Object.values(raw);
    }))
  }
}
