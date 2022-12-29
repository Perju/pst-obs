import { Injectable } from '@angular/core'

import OBSWebSocket from 'obs-websocket-js'
import { Observable, ReplaySubject } from 'rxjs'

export interface ObsUrl {
  protocol?: string
  host: string
  port?: string
}

@Injectable({
  providedIn: 'root'
})
export class ObsApiService {
  private idParams = { rpcVersion: 1 }

  private obsWS: OBSWebSocket
  constructor() {
    this.obsWS = new OBSWebSocket()
  }

  login(obsUrl: ObsUrl, password: string): Observable<any> {
    const action = new ReplaySubject(1)
    let url = this._genUrl(obsUrl)
    this.obsWS
      .connect(url, password, this.idParams)
      .then((data) => {
        let response = {
          data: data,
          obsWS: this.obsWS 
        }
        action.next(response)
      })
      .catch((err) => {
        console.log('Error al hacer login')
        action.error(err)
      })
      .finally(() => {
        action.complete()
      })
    return action
  }

  private _genUrl(obsUrl: ObsUrl): string {
    let { protocol, host, port } = obsUrl
    let url: ObsUrl = {
      protocol: this._chkString(protocol) ? protocol : 'ws',
      host: this._chkString(host) ? host : 'localhost',
      port: this._chkString(port) ? port : 'port'
    }
    return url.protocol + '://' + url.host + ':' + url.port
  }
  private _chkString(val: string | null | undefined) {
    return val !== '' && val !== undefined && val !== null
  }
}
