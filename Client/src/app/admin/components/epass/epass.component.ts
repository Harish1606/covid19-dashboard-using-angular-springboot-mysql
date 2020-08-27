import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Epass } from '../../modules/epass';
import { EpassService } from '../../services/epass.service';

@Component({
  selector: 'app-epass',
  templateUrl: './epass.component.html',
  styleUrls: ['./epass.component.css']
})
export class EpassComponent implements OnInit {

  epass:Observable<Epass[]>
  loading=false;
  constructor(private router:Router,private _service:EpassService) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData(){
    this.epass=this._service.getDistricts();
  }

  deleteDistrict(id:number){
    this.loading=true;
    this._service.deleteDistrict(id).subscribe(data=>{
      this.loading=false;
      this.reloadData();
    },
    error=>{
      this.loading=false;
    })
  }

}
