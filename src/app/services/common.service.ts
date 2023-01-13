import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommonService {
  private isPropVisible$: Subject<any> = new Subject<any>();
  
  public setIsPropVisible(data:any):void{
    this.isPropVisible$.next(data)
  }
  public isPropVisible(): Observable<any> {
    return this.isPropVisible$.asObservable();
  }
  constructor() {}
}
