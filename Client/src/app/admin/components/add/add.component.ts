import { Component, OnInit } from '@angular/core';
import { DistrictDataSummary } from '../../modules/district-data';
import { Router } from '@angular/router';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  loading=false;
  districtname:DistrictDataSummary=new DistrictDataSummary();
  constructor(private router:Router,
    private _service:TamilnaduDataService) { }

  ngOnInit(): void {
  }

  newDistrict():void{
    this.districtname=new DistrictDataSummary();
  }

  save(){
    this.loading=true;
    this._service.createDistrict(this.districtname).subscribe(data=>{
      this.loading=false;
    },
    error=>{
      this.loading=false;
    })
    this.districtname=new DistrictDataSummary();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/admin/edit']);
  }

  onSubmit(){
    this.save();
  }

}
