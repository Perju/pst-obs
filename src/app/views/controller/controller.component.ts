import { Component, OnInit } from '@angular/core'

import { Scene } from '../../models/scene.model'

import { ObsApiService } from 'src/app/services/obs-api.service'
import { OBSRequest } from 'src/app/services/constants'

@Component({
  selector: 'obs-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.sass']
})
export class ControllerComponent implements OnInit {
  public scenes: Scene[] = []
  public currentScene: Scene = { sceneName: 'Inicio', sceneIndex: 0 }
  constructor(private obsApi: ObsApiService) {
    this.scenes = [
      { sceneName: 'Inicio', sceneIndex: 0 },
      { sceneName: 'Jugando', sceneIndex: 1 },
      { sceneName: 'Charlando', sceneIndex: 2 }
    ]
  }

  ngOnInit() {
    // obtener lista de escenas
    this.obsApi.getScenes().subscribe({
      next: (data) => (this.scenes = data.scenes),
      error: (error) => console.log(error),
      complete: () => {
        this.scenes.forEach((scene) => {
          this._getSources(scene)
        })
      }
    })
  }

  //obtener lista de fuentes de cada escena
  private _getSources(scene: Scene) {
    this.obsApi.getSources(scene.sceneName).subscribe({
      next: (data) => (scene.sceneItems = data.sceneItems),
      error: (error) => console.log(error),
      complete: () => {}
    })
  }

  public toggleSource($event: any, sceneName: string, sceneItemId: number) {
    console.log('toggleSource: ', $event.checked)
    this.obsApi.sendCommand(OBSRequest.SetSceneItemEnabled, {
      sceneName: sceneName,
      sceneItemId: sceneItemId,
      sceneItemEnabled: $event.checked
    })
  }
}
