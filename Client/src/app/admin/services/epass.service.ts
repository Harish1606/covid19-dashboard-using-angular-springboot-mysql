import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpassService {

  private baseUrl='http://localhost:8080/deleteEpass';
  constructor(private http:HttpClient) { }

  public createDistrict(epass:Object):Observable<Object>{
    return this.http.post('http://localhost:8080/postEpass',epass);
  }

  public getDistricts():Observable<any>{
    return this.http.get('http://localhost:8080/getEpass');
  }

  public deleteDistrict(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

}
