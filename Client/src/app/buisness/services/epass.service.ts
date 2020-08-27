import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEpass } from '../modules/userEpass';

@Injectable({
  providedIn: 'root'
})
export class EpassService {

  private getUrl='http://localhost:8080/usergetEpass';
  constructor(private http:HttpClient) { }

  public getDistricts():Observable<any>{
    return this.http.get('http://localhost:8080/getEpass');
  }

  public userEpass(epass:UserEpass):Observable<any>{
    return this.http.post<any>('http://localhost:8080/userEpass',epass);
  }

}
