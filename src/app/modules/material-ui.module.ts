import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class MaterialUiModule {}
