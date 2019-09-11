import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'url';
import { groupBy } from 'rxjs/operators';
import { IteractionDataService } from './iteraction-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient,private _IteractionDataService:IteractionDataService) {
  }
  configUrl = 'https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre';
  users: any[5000];


  footTable= [];
  footTable2 = [];
  footTable3 = [];
  footTable4 = [];

  data: object;
 
  j = 0;
  s = 0;
  

  ngOnInit(): void {

    this.http.get(this.configUrl).subscribe(Response => {
      this.users = JSON.stringify(Response);
      this.data = JSON.parse(this.users);
      this.s = Object.keys(this.data).length;

      for (let i = 0; i < this.s; i++) {

        this.footTable.push(this.data[i].competition);

        if (typeof this.footTable2[this.footTable[i]] === 'undefined') {
          this.footTable2[this.footTable[i]] = [];
        }

        this.footTable2[this.footTable[i]].push(this.data[i]);
      }

      for (let i = 0; i < this.footTable.length; i++) {
        if (!this.footTable4.includes(this.footTable[i])) {
          this.footTable4.push(this.footTable[i]);
        }
      }
     // console.log(this.footTable4);
      this._IteractionDataService.SendFullSport(this.footTable4,this.footTable2);

    })


  }


}
