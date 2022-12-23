import { Component, OnInit } from '@angular/core'

import { Scene } from '../../models/scene.model'

@Component({
  selector: 'obs-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.sass']
})
export class ControllerComponent implements OnInit {
  public scenes: Scene[] = []
  public scene: Scene = { name: 'Inicio' }
  constructor() {
    this.scenes = [
      { name: 'Inicio' },
      { name: 'Jugando' },
      { name: 'Charlando' }
    ]
  }
  ngOnInit() {}
}
