import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'obs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ObsComponent {
  title = 'pst-obs';
  tiles: Tile[] = [
    {text: 'Left', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Content', cols: 3, rows: 1,color: 'lightpink'},
    {text: 'Right', cols: 1, rows: 1,color: '#DDBDF1'},
  ]
}
