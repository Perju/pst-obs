import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private isPropVisible$: Subject<any> = new Subject<any>();
  
  setIsPropVisible(data:any):void{
    this.isPropVisible$.next(data)
  }
  isPropVisible(): Observable<any> {
    return this.isPropVisible$.asObservable();
  }
  constructor() {}
}
