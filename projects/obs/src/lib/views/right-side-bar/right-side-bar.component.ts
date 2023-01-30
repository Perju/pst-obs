import { Component, OnInit } from '@angular/core'
import { ObsUIService } from '../../services/obs-ui.service';

@Component({
  selector: 'obs-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.sass']
})
export class ObsRightSideBarComponent implements OnInit {
  public sideElems: any;

  constructor(private obsUIService: ObsUIService) {}

  ngOnInit() {
    this.obsUIService.getRightSidebarData().subscribe({
      next: (data: any) => {
        this.sideElems = {
          name: data.sourceName,
          transform: data.transformData.sceneItemTransform,
        };
        console.log("RightSidebarData", data)
      }
    })
  }
}
