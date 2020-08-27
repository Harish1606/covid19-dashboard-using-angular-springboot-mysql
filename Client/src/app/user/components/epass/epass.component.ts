import { Component, OnInit } from '@angular/core';
import { DistrictDataSummary } from '../../modules/district-data';
import { Observable } from 'rxjs';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';
import { Epass } from '../../modules/epass';
import { EpassService } from '../../services/epass.service';
import { DistrictAffected } from '../../modules/district-affected';
import { Router } from '@angular/router';
import { UserEpass } from '../../modules/userEpass';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-epass',
  templateUrl: './epass.component.html',
  styleUrls: ['./epass.component.css']
})
export class EpassComponent implements OnInit {


  f:number=0;
  userEpass=new UserEpass();
  data:DistrictAffected[];
  message='';
  epass=new Epass();
  Districts:Observable<DistrictDataSummary[]>;
  loading=false;

  constructor(private _service:TamilnaduDataService,
              private service:EpassService,
              private router:Router) { }

  Reasons=[
    'Marriage',
    'Death',
    'Work',
    'Other'
  ]
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.Districts=this._service.getDistricts();
  }

  EpassForm(){
    this.loading=true;
    this.userEpass.emailId=this.epass.emailId;
    this.userEpass.userName=this.epass.userName;
    this.userEpass.date=this.epass.date;
    if(this.epass.reason=='Marriage' || this.epass.reason=='Death'){
      this.service.userEpass(this.userEpass).subscribe(
        data=>{
          this.loading=false;
          this.message="Epass provided sucessfully";
        }
      )
      let a=Math.random().toString()[2];
      let p=this.epass.phone.toString().slice(0,5);
      const doc=new jsPDF();
      doc.text('TN ePASS',90,15);
      doc.text('Tamil Nadu COVID-19 - Outside District TN ePASS',40,30);
      doc.text('Pass Number : TN/'+this.epass.from[0]+this.epass.to[0]+'/'+a+'/'+p[0]+p[1]+p[2]+p[3],20,60);
      doc.text('Applicant name : '+this.epass.userName,20,80);
      doc.text('Email Id : '+this.epass.emailId.toString(),20,100);
      doc.text('Phone number : '+this.epass.phone,20,120);
      doc.text('Reason for travel : '+this.epass.reason,20,140);
      doc.text('From : '+this.epass.from,20,160);
      doc.text('To : '+this.epass.to,20,180);
      doc.text('Issued on : '+this.epass.date,20,200);
      doc.save('epass.pdf');
    }
    else{
      this.service.getDistricts().subscribe(
        data=>{
          this.data=data;
          this.f=0;
          this.data.forEach(cs=>{
            if(cs.district==this.epass.from || cs.district==this.epass.to){
              this.f=1;
            }
          })
          if(this.f==1){
            this.loading=false;
            this.message="Unable to provide epass since covid 19 count is high";
          }
          else{
            this.service.userEpass(this.userEpass).subscribe(
              data=>{
                this.loading=false;
                this.message="Epass provided sucessfully";
              }
            )
            let a=Math.random().toString()[2];
            let p=this.epass.phone.toString().slice(0,5);
            const doc=new jsPDF();
            doc.text('TN ePASS',90,15);
            doc.text('Tamil Nadu COVID-19 - Outside District TN ePASS',40,30);
            doc.text('Pass Number : TN/'+this.epass.from[0]+this.epass.to[0]+'/'+a+'/'+p[0]+p[1]+p[2]+p[3],20,60);
            doc.text('Applicant name : '+this.epass.userName,20,80);
            doc.text('Email Id : '+this.epass.emailId.toString(),20,100);
            doc.text('Phone number : '+this.epass.phone,20,120);
            doc.text('Reason for travel : '+this.epass.reason,20,140);
            doc.text('From : '+this.epass.from,20,160);
            doc.text('To : '+this.epass.to,20,180);
            doc.text('Issued on : '+this.epass.date,20,200);
            doc.save('epass.pdf');
          }
        }
      )
    }
  }
}
