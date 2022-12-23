import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'obs-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.sass']
})
export class LeftSideBarComponent {
  public obsLinks: { label: string; href: string; class?: string }[]
  constructor(private router: Router) {
    this.obsLinks = [
      { label: 'Conectar', href: '' },
      { label: 'Controlador', href: 'controller' },
      { label: 'Ayuda', href: 'help' }
    ]
  }

  ngOnInit() {
    this.markCurrentPosition()
  }
  markCurrentPosition() {
    console.log(this.router.url)
    this.obsLinks = this.obsLinks.map((e) => {
      e.class = '/' + e.href === this.router.url ? 'current-position' : ''
      return e
    })
  }
  navigate(href: string) {
    this.router.navigate([href]).then(()=>this.markCurrentPosition())
  }
}
