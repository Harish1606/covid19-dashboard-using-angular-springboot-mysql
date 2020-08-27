import { Component, OnInit } from '@angular/core';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';
import { Router } from '@angular/router';
import { DistrictDataSummary } from '../../modules/district-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  loading=false;
  Districts:Observable<DistrictDataSummary[]>;
  constructor(private router:Router,private _service:TamilnaduDataService) { }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.Districts=this._service.getDistricts();
  }

  update(id:number){
    this.router.navigate(['/admin/update',id]);
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
