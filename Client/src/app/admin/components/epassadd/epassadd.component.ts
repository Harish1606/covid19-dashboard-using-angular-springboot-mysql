import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Epass } from '../../modules/epass';
import { EpassService } from '../../services/epass.service';
import { DistrictDataSummary } from '../../modules/district-data';
import { Observable } from 'rxjs';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';

@Component({
  selector: 'app-epassadd',
  templateUrl: './epassadd.component.html',
  styleUrls: ['./epassadd.component.css']
})
export class EpassaddComponent implements OnInit {

  c:number=0;
  message='';
  flag:number=0;
  check:Epass[];
  loading=false;
  epass:Epass=new Epass();
  Districts:Observable<DistrictDataSummary[]>;
  constructor(private router:Router,private _service:EpassService,private service:TamilnaduDataService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.Districts=this.service.getDistricts();
  }

  newDistrict():void{
    this.epass=new Epass();
  }

  save(){
    this.loading=true;
    this._service.getDistricts().subscribe(
      data=>{
        this.check=data;
        this.check.forEach(cs=>{
          if(cs.district==this.epass.district){
            this.flag=1;
          }
        })
        if(this.flag==0){
          this._service.createDistrict(this.epass).subscribe(
            data=>{
              this.loading=false;
              this.c=1;
              this.message='District sucessfully added';
            }
          )
        }
        else{
          this.loading=false;
          this.message='District already exists';
        }
      }
    )
  }

  gotoList(){
    this.router.navigate(['/admin/epass']);
  }

  onSubmit(){
    this.save();
  }

}
