import { Component } from '@angular/core'

@Component({
  selector: 'obs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ObsComponent {
  isOpened = true;
  cerrarPropiedades(){
    console.log("llego al boton")
    // drawer.close()
    this.isOpened = false;
  }
}
