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
  public scene: Scene = { sceneName: 'Inicio', sceneIndex: 1 }
  constructor(private obsApi: ObsApiService, private obsAuth: ObsAuthService, private location: Location) {
    this.scenes = [
      { sceneName: 'Inicio', sceneIndex: 1 },
      { sceneName: 'Jugando', sceneIndex: 2 },
      { sceneName: 'Charlando', sceneIndex: 3 }
    ]
  }
  ngOnInit() {
    // obtener lista de escenas
    this.obsApi.getScenes().subscribe({
      next:(data)=>{
        console.log("GetScenes: ", data.scenes.scenes)
        this.scenes = data.scenes;
      },
      error: ()=>{},
      complete:()=>{}
    })
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
  }
}
