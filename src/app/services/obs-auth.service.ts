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
        this.obsApi.onConnectionClosed().subscribe({
          next: () => this._isLoggedIn$.next(false)
        })
        localStorage.setItem('obsAuth', response)
        this._isLoggedIn$.next(true)
      })
    )
  }
}
