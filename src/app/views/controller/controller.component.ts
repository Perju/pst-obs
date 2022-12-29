import { Component, OnInit } from '@angular/core'
import { ObsAuthService } from 'src/app/services/obs-auth.service'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

import { Scene } from '../../models/scene.model'

@Component({
  selector: 'obs-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.sass']
})
export class ControllerComponent implements OnInit {
  public scenes: Scene[] = []
  public scene: Scene = { name: 'Inicio' }
  constructor(private obsAuth: ObsAuthService, private location: Location) {
    this.scenes = [
      { name: 'Inicio' },
      { name: 'Jugando' },
      { name: 'Charlando' }
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
  }
}
