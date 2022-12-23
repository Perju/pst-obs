import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obs-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.sass']
})
export class LeftSideBarComponent {
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
