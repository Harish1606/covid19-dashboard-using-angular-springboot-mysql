import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamilnaduDataService {

  private baseUrl='http://localhost:8080/delete';
  private updateUrl='http://localhost:8080/update';
  private getUrl='http://localhost:8080/get';
  constructor(private http:HttpClient) { }

  public createDistrict(district:Object):Observable<Object>{
    return this.http.post('http://localhost:8080/post',district);
  }

  public updateDistrict(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.updateUrl}/${id}`,value);
  }

  public getDistricts():Observable<any>{
    return this.http.get('http://localhost:8080/get');
  }

  public getDistrict(id:number):Observable<any>{
    return this.http.get(`${this.getUrl}/${id}`);
  }

  public deleteDistrict(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

}
