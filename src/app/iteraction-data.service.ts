import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IteractionDataService {
  private _teacherMessageSource=new Subject<any>();
  private _teacherMessageSource2=new Subject<any>();

  TableDeSport$=this._teacherMessageSource.asObservable();
  TableCompetition$=this._teacherMessageSource2.asObservable();

  constructor() { }
  SendFullSport(TableCompetition:any,TableSport:any){
    this._teacherMessageSource.next(TableCompetition);
    this._teacherMessageSource2.next(TableSport);

  }
}
