import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-all-sports",
  templateUrl: "./all-sports.component.html",
  styleUrls: ["./all-sports.component.css"]
})
export class AllSportsComponent implements OnInit {
  constructor(private http: HttpClient, private _elementRef: ElementRef) {}
  configUrl = "https://www.pointdevente.parionssport.fdj.fr/api/1n2/offre";
  users: any[5000];

  isCollapsed: boolean = true;
  AllCompetition = [];
  footTable2 = [];
  footTable3 = [];
  AllCompetitionWihoutRepeat = [];
  Table1x2 = [];
  TabAutreCotes = [];
  data: object;
  showTab = "";
  TabAutreCotes22 = [];
nam :any;
  equipe = [];
  j = 0;
  s = 0;
  TabTaamirWar9a = [];
gainTotal:any;
myInput:any;
  domElement = this._elementRef.nativeElement.querySelector(`#nikzebi`);
  @ViewChild("nikzebi", { static: true }) nikzebi: ElementRef;

  ngOnInit() {
    
    this.http.get(this.configUrl).subscribe(Response => {
      this.users = JSON.stringify(Response);
      this.data = JSON.parse(this.users);
      this.s = Object.keys(this.data).length;

      for (let i = 0; i < this.s; i++) {
        this.AllCompetition.push(this.data[i].competition);
      }

      for (let i = 0; i < this.AllCompetition.length; i++) {
        if (!this.AllCompetitionWihoutRepeat.includes(this.AllCompetition[i])) {
          this.AllCompetitionWihoutRepeat.push(this.AllCompetition[i]);
        }
      }

      for (let i = 0; i < this.s; i++) {
        if (typeof this.footTable2[this.AllCompetition[i]] === "undefined") {
          this.footTable2[this.AllCompetition[i]] = [];
        }
        this.equipe.push(this.data[i].label);
        this.footTable2[this.AllCompetition[i]].push(this.data[i]); //all data

        this.Table1x2[this.data[i].label] = [];
        this.Table1x2[this.data[i].label].push(this.data[i].outcomes); //tab pour les 1x2

        this.TabAutreCotes[this.data[i].label] = [];
        this.TabAutreCotes[this.data[i].label].push(this.data[i].formules); //tab pour les autres cotes
      }
    });
    
  }
  toggleCollapse(i: any, eq: string) {
    this.showTab = i;
    this.isCollapsed = !this.isCollapsed;
  }
  getValue(eventname: string, mrktPlace: any, coteLbl: any,cote: any) {
    this. nam =1;

    var s = 1;
    let tot;
    this.TabTaamirWar9a.push({ label: eventname, marketPlace: mrktPlace, LabelDeCote: coteLbl,cote:cote});
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    var st: string;
    for (let i = 0; i < this.TabTaamirWar9a.length; i++) {
      st = this.TabTaamirWar9a[i].cote;
      s = parseFloat(st.replace(",", ".").replace(" ", ""));

      this.nam *= s;
    }
   console.log("cote", s, "tot", this.nam);
    return this.nam;
  }

  Gain(event:any){
  console.log( event);
 
  this.gainTotal=event*this.nam;
  

 }
}
