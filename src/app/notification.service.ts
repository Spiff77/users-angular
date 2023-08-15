import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _usersupdated$ = new Subject<void>()

  constructor() { }

  get usersupdated(): Subject<void>{
    return this._usersupdated$;
  }

  sendMesage(): void {
    this._usersupdated$.next()
  }

}
