import { Component, OnInit } from '@angular/core';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';
import { DistrictDataSummary } from '../../modules/district-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  district:DistrictDataSummary;
  loading=false;

  constructor(private _service:TamilnaduDataService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.district=new DistrictDataSummary();
    this.id=this.route.snapshot.params['id'];
    this._service.getDistrict(this.id).subscribe(data=>{
      this.district=data;
    },
    error=>{
      console.log(error);
    });
  }

  update(){
    this.loading=true;
    this._service.updateDistrict(this.id,this.district).subscribe(data=>{
      this.loading=false;
    },
    error=>{
      this.loading=false;
    });
    this.district=new DistrictDataSummary();
    this.gotoList();
  }

  onSubmit(){
    this.update();
  }

  gotoList(){
    this.router.navigate(['/admin/edit']);
  }
}
