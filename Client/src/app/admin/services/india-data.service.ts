import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndiaDataService {

  private indiaData="https://api.covid19india.org/data.json";
  constructor(private http:HttpClient) { }

  getIndiaData():Observable<any>{
    return this.http.get<any>(this.indiaData).pipe(map(res=>{
      let object=res.statewise;
      object.splice(0,1);
      object.splice(-2,2);
      return object;
    }));
  }
}
