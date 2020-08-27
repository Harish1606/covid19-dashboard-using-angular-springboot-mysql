import { Component, OnInit } from '@angular/core';
import { TamilnaduDataService } from '../../services/tamilnadu-data.service';
import { DistrictDataSummary } from '../../modules/district-data';
import { jsPDF } from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF{
  autoTable:(options:UserOptions)=>jsPDF;
}

@Component({
  selector: 'app-tamilnadu',
  templateUrl: './tamilnadu.component.html',
  styleUrls: ['./tamilnadu.component.css']
})
export class TamilnaduComponent implements OnInit {

  district='';
  pdf:DistrictDataSummary[];
  data:DistrictDataSummary[];
  districts:string[]=[];
  totalActive=0;
  totalConfirmed=0;
  totalDeaths=0;
  totalRecovered=0;
  loading=true;
  datatable=[];
  chart={
    PieChart:'PieChart',
    ColumnChart:'ColumnChart',
    height:500,
    options: {
      animation:{
        duration:1000,
        easing:'out'
      }
    }
  }
  constructor(private _service:TamilnaduDataService) { }

  ngOnInit(): void {
    this._service.getDistricts().subscribe(
      {
        next:(data)=>{
          this.data=data;
          this.pdf=data;
          this.data.forEach(cs=>{
            this.districts.push(cs.district);
          })
          this.initChart('c');
        },
        complete:()=>{
          this.updateValues('Chennai');
          this.loading=false;
        }
    })
  }

  updateValues(district:String){
    this.data.forEach(cs=>{
      if(district==cs.district){
        this.totalActive=cs.active;
        this.totalConfirmed=cs.confirmed;
        this.totalDeaths=cs.death;
        this.totalRecovered=cs.recovered;
        this.district=cs.district;
      }
    })
  }

  initChart(caseType:string){
    this.datatable=[];
    this.data.forEach(cs=>{
      let value:number;
      if(caseType=='c'){
        if(+cs.confirmed>500){
          value=+cs.confirmed;
        }
      }
      if(caseType=='a'){
        if(+cs.active>500){
          value=+cs.active;
        }
      }
      if(caseType=='d'){
        if(+cs.death>100){
          value=+cs.death;
        }
      }
      if(caseType=='r'){
        if(+cs.recovered>500){
          value=+cs.recovered;
        }
      }
      this.datatable.push([
        cs.district,
        value
      ])
    })
  }

  updateChart(input:HTMLInputElement){
    this.initChart(input.value);
  }

  downloadAll(){
    this.pdf.sort((a,b)=>b.confirmed-a.confirmed);
    const doc=new jsPDF('portrait','px','a4') as jsPDFWithPlugin;
    doc.text('Top 30 covid-19 district wise report for Tamilnadu',100,30);
    doc.autoTable({
      margin:{top:50},
      head:[['S.no','District','Confirmed','Recovered','Death','Active']],
      body:[
        ['1',this.pdf[0].district.toString(),this.pdf[0].confirmed.toString(),this.pdf[0].recovered.toString(),this.pdf[0].death.toString(),this.pdf[0].active.toString()],
        ['2',this.pdf[1].district.toString(),this.pdf[1].confirmed.toString(),this.pdf[1].recovered.toString(),this.pdf[1].death.toString(),this.pdf[1].active.toString()],
        ['3',this.pdf[2].district.toString(),this.pdf[2].confirmed.toString(),this.pdf[2].recovered.toString(),this.pdf[2].death.toString(),this.pdf[2].active.toString()],
        ['4',this.pdf[3].district.toString(),this.pdf[3].confirmed.toString(),this.pdf[3].recovered.toString(),this.pdf[3].death.toString(),this.pdf[3].active.toString()],
        ['5',this.pdf[4].district.toString(),this.pdf[4].confirmed.toString(),this.pdf[4].recovered.toString(),this.pdf[4].death.toString(),this.pdf[4].active.toString()],
        ['6',this.pdf[5].district.toString(),this.pdf[5].confirmed.toString(),this.pdf[5].recovered.toString(),this.pdf[5].death.toString(),this.pdf[5].active.toString()],
        ['7',this.pdf[6].district.toString(),this.pdf[6].confirmed.toString(),this.pdf[6].recovered.toString(),this.pdf[6].death.toString(),this.pdf[6].active.toString()],
        ['8',this.pdf[7].district.toString(),this.pdf[7].confirmed.toString(),this.pdf[7].recovered.toString(),this.pdf[7].death.toString(),this.pdf[7].active.toString()],
        ['9',this.pdf[8].district.toString(),this.pdf[8].confirmed.toString(),this.pdf[8].recovered.toString(),this.pdf[8].death.toString(),this.pdf[8].active.toString()],
        ['10',this.pdf[9].district.toString(),this.pdf[9].confirmed.toString(),this.pdf[9].recovered.toString(),this.pdf[9].death.toString(),this.pdf[9].active.toString()],
        ['11',this.pdf[10].district.toString(),this.pdf[10].confirmed.toString(),this.pdf[10].recovered.toString(),this.pdf[10].death.toString(),this.pdf[10].active.toString()],
        ['12',this.pdf[11].district.toString(),this.pdf[11].confirmed.toString(),this.pdf[11].recovered.toString(),this.pdf[11].death.toString(),this.pdf[11].active.toString()],
        ['13',this.pdf[12].district.toString(),this.pdf[12].confirmed.toString(),this.pdf[12].recovered.toString(),this.pdf[12].death.toString(),this.pdf[12].active.toString()],
        ['14',this.pdf[13].district.toString(),this.pdf[13].confirmed.toString(),this.pdf[13].recovered.toString(),this.pdf[13].death.toString(),this.pdf[13].active.toString()],
        ['15',this.pdf[14].district.toString(),this.pdf[14].confirmed.toString(),this.pdf[14].recovered.toString(),this.pdf[14].death.toString(),this.pdf[14].active.toString()],
        ['16',this.pdf[15].district.toString(),this.pdf[15].confirmed.toString(),this.pdf[15].recovered.toString(),this.pdf[15].death.toString(),this.pdf[15].active.toString()],
        ['17',this.pdf[16].district.toString(),this.pdf[16].confirmed.toString(),this.pdf[16].recovered.toString(),this.pdf[16].death.toString(),this.pdf[16].active.toString()],
        ['18',this.pdf[17].district.toString(),this.pdf[17].confirmed.toString(),this.pdf[17].recovered.toString(),this.pdf[17].death.toString(),this.pdf[17].active.toString()],
        ['19',this.pdf[18].district.toString(),this.pdf[18].confirmed.toString(),this.pdf[18].recovered.toString(),this.pdf[18].death.toString(),this.pdf[18].active.toString()],
        ['20',this.pdf[19].district.toString(),this.pdf[19].confirmed.toString(),this.pdf[19].recovered.toString(),this.pdf[19].death.toString(),this.pdf[19].active.toString()],
        ['21',this.pdf[20].district.toString(),this.pdf[20].confirmed.toString(),this.pdf[20].recovered.toString(),this.pdf[20].death.toString(),this.pdf[20].active.toString()],
        ['22',this.pdf[21].district.toString(),this.pdf[21].confirmed.toString(),this.pdf[21].recovered.toString(),this.pdf[21].death.toString(),this.pdf[21].active.toString()],
        ['23',this.pdf[22].district.toString(),this.pdf[22].confirmed.toString(),this.pdf[22].recovered.toString(),this.pdf[22].death.toString(),this.pdf[22].active.toString()],
        ['24',this.pdf[23].district.toString(),this.pdf[23].confirmed.toString(),this.pdf[23].recovered.toString(),this.pdf[23].death.toString(),this.pdf[23].active.toString()],
        ['25',this.pdf[24].district.toString(),this.pdf[24].confirmed.toString(),this.pdf[24].recovered.toString(),this.pdf[24].death.toString(),this.pdf[24].active.toString()],
        ['26',this.pdf[25].district.toString(),this.pdf[25].confirmed.toString(),this.pdf[25].recovered.toString(),this.pdf[25].death.toString(),this.pdf[25].active.toString()],
        ['27',this.pdf[26].district.toString(),this.pdf[26].confirmed.toString(),this.pdf[26].recovered.toString(),this.pdf[26].death.toString(),this.pdf[26].active.toString()],
        ['28',this.pdf[27].district.toString(),this.pdf[27].confirmed.toString(),this.pdf[27].recovered.toString(),this.pdf[27].death.toString(),this.pdf[27].active.toString()],
        ['29',this.pdf[28].district.toString(),this.pdf[28].confirmed.toString(),this.pdf[28].recovered.toString(),this.pdf[28].death.toString(),this.pdf[28].active.toString()],
        ['30',this.pdf[29].district.toString(),this.pdf[29].confirmed.toString(),this.pdf[29].recovered.toString(),this.pdf[29].death.toString(),this.pdf[29].active.toString()]
      ]
    })
    doc.save('Tamilnadu.pdf');
  }

  downloadSelected(){
    const doc=new jsPDF();
    const date=new Date();
    doc.text('Date:'+date.getDate().toString()+'.'+(date.getMonth()+1).toString()+'.'+date.getFullYear().toString(),15,15);
    doc.text('Covid 19 report',90,15);
    doc.text('District : '+this.district.toString(),20,45);
    doc.text('Confirmed : '+this.totalConfirmed.toString(),20,65);
    doc.text('Recovered : '+this.totalRecovered.toString(),20,85);
    doc.text('Death : '+this.totalDeaths.toString(),20,105);
    doc.text('Active : '+this.totalActive.toString(),20,125);
    doc.save(this.district.toString()+'.pdf');
  }

}
