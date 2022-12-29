import { Injectable } from '@angular/core'
import OBSWebSocket from 'obs-websocket-js'
import { BehaviorSubject, tap } from 'rxjs'
import { ObsApiService, ObsUrl } from './obs-api.service'

@Injectable({
  providedIn: 'root'
})
export class ObsAuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  
  constructor(private obsApi: ObsApiService) {}

  public login(obsUrl: ObsUrl, password: string) {
    return this.obsApi.login(obsUrl, password).pipe(
      tap((response: any) => {
        localStorage.setItem('obsAuth', response)
        this._subcribeToEvents(response.obsWS)
        this._isLoggedIn$.next(true)
        console.log('on login', response)
      })
    )
  }

  private _subcribeToEvents(obsWS: OBSWebSocket) {
    obsWS.on('ConnectionClosed', () => {
      this._isLoggedIn$.next(false)
    })
  }
}
