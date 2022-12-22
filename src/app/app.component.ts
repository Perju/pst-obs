import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'obs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ObsComponent implements OnInit {
  public obsLinks: { label: string; href: string }[]
  constructor() {
    this.obsLinks = [
      { label: 'Conectar', href: '' },
      { label: 'Controlador', href: 'controller' },
      { label: 'Ayuda', href: 'help' }
    ]
  }
  ngOnInit() {}
}
