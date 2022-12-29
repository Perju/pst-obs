import { Component, OnInit } from '@angular/core'
import { ObsAuthService } from 'src/app/services/obs-auth.service'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

import { Scene } from '../../models/scene.model'
import { ObsApiService } from 'src/app/services/obs-api.service'

@Component({
  selector: 'obs-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.sass']
})
export class ControllerComponent implements OnInit {
  public scenes: Scene[] = []
  constructor(
    private obsApi: ObsApiService,
    private obsAuth: ObsAuthService,
    private location: Location
  ) {
    this.scenes = [
      { sceneName: 'Inicio', sceneIndex: 0 },
      { sceneName: 'Jugando', sceneIndex: 1 },
      { sceneName: 'Charlando', sceneIndex: 2 }
    ]
  }
  ngOnInit() {
    this.obsAuth.isLoggedIn$.subscribe({
      next: (data) => {
        if (data) console.log('Controller component: ', data)
        else this.location.back()
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('Completed')
      }
    })

    // obtener lista de escenas
    this.obsApi.getScenes().subscribe({
      next: (data) => {
        console.log('GetScenes: ', data.scenes)
        this.scenes = data.scenes
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        //obtener lista de fuentes de cada escena
        this._getSources()
      }
    })
  }

  //obtener lista de fuentes de cada escena
  private _getSources() {
    this.scenes.forEach((scene) => {
      console.log()
      this.obsApi.getSources(scene.sceneName).subscribe({
        next: (data) => {
          scene.sceneItems = data.sceneItems
          console.log("GetSources:", scene.sceneItems)
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {}
      })
    })
  }
}
