import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, tap } from 'rxjs'
import { ObsApiService, ObsUrl } from './obs-api.service'

@Injectable()
export class ObsAuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private obsApi: ObsApiService, private router: Router) {}

  public login(obsUrl: ObsUrl, password: string) {
    return this.obsApi.login(obsUrl, password).pipe(
      tap((response: any) => {
        this.obsApi.onConnectionClosed().subscribe({
          next: () => {
            const url = this.router.url
            if (
              url.startsWith('/obs') &&
              url !== '/obs/login' &&
              url !== '/obs/help'
            ) {
              console.log(
                url,
                url.startsWith('/obs') &&
                  url !== '/obs/login' &&
                  url !== '/obs/help'
              )
              this.router.navigateByUrl('/obs/login')
            }
            return this._isLoggedIn$.next(false)
          }
        })
        localStorage.setItem('obsAuth', response)
        this._isLoggedIn$.next(true)
      })
    )
  }
}
