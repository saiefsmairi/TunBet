import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IteractionDataService } from '../iteraction-data.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  TableCompetition = [];
  DataSport = [];

  constructor(private http: HttpClient) { }
  configUrl = 'https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre';
  users: any[5000];


  footTable = [];
  footTable2 = [];
  footTable3 = [];
  footTable4 = [];
  s = 0;
  data: object;
  ngOnInit() {
    this.http.get(this.configUrl).subscribe(Response => {
      this.users = JSON.stringify(Response);
      this.data = JSON.parse(this.users);
      this.s = Object.keys(this.data).length;

      for (let i = 0; i < this.s; i++) {

        this.footTable.push(this.data[i].competition);

      }

      for (let i = 0; i < this.s; i++) {
        if (this.data[i].sportId == '100') {
          if (typeof this.footTable2[this.footTable[i]] === 'undefined') {
            this.footTable2[this.footTable[i]] = [];
          }

          this.footTable2[this.footTable[i]].push(this.data[i]);
        }
      }

      for (let i = 0; i < this.footTable.length; i++) {
        if (!this.footTable4.includes(this.footTable[i])) {
          this.footTable4.push(this.footTable[i]);
        }
      }
      console.log(this.footTable4);

    })






  }
}
