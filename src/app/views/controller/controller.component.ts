import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Scene } from '../../models/scene.model';

import { ObsApiService } from '../../services/obs-api.service';
import { OBSRequest } from '../../services/constants';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'obs-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.sass'],
})
export class ControllerComponent implements OnInit {
  public scenes: Scene[] = [];
  public currentScene: Scene = { sceneName: 'Inicio' };
  constructor(
    private obsApi: ObsApiService,
    private commonService: CommonService
  ) {
    this.scenes = [
      { sceneName: 'Inicio', sceneIndex: 0 },
      { sceneName: 'Jugando', sceneIndex: 1 },
      { sceneName: 'Charlando', sceneIndex: 2 },
    ];
  }

  ngOnInit() {
    // obtener lista de escenas
    this.obsApi.getScenes().subscribe({
      next: (data) => {
        console.log(data);
        this.currentScene.sceneName = data.currentProgramSceneName;
        this.scenes = data.scenes.reverse();
      },
      error: (error) => console.log(error),
      complete: () => {
        this.scenes.forEach((scene) => {
          this._getSources(scene);
        });
      },
    });
  }

  //obtener lista de fuentes de cada escena
  private _getSources(scene: Scene) {
    this.obsApi.getSources(scene.sceneName).subscribe({
      next: (data) => (scene.sceneItems = data.sceneItems.reverse()),
      error: (error) => console.log(error),
      complete: () => {},
    });
  }

  public toggleSource($event: any, sceneName: string, sceneItemId: number) {
    this.obsApi.sendCommand(OBSRequest.SetSceneItemEnabled, {
      sceneName: sceneName,
      sceneItemId: sceneItemId,
      sceneItemEnabled: $event.checked,
    });
  }
  public getIsActive(sceneName: string) {
    return this.currentScene.sceneName === sceneName;
  }
  public getActiveColor(sceneName: string) {
    return this.currentScene.sceneName === sceneName ? 'accent' : 'primary';
  }

  public setCurrentScene($event: any, sceneName: string) {
    $event.stopPropagation();
    this.obsApi
      .sendCommand(OBSRequest.SetCurrentProgramScene, {
        sceneName: sceneName,
      })
      .subscribe({
        next: () => (this.currentScene.sceneName = sceneName),
      });
    console.log('setCurrentScene');
  }
  public showProperties() {
    this.commonService.setIsPropVisible(true);
  }
}
